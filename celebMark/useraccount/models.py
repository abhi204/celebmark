from .subscription_details import subscription_details
from django.db import models
from django.utils import timezone
import jsonfield
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
    )

def profile_pic_storage(instance, filename):
    return '/users/'.join([str(instance.user_name), 'profile_pic.jpg'])

class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, user_name, password,
                    is_staff=False, is_superuser=False, **extra_fields):
        """
        Create a user with given user_name and password
        """
        now = timezone.now()
        user = self.model(user_name=user_name,
                        id=user_name,
                        is_staff=is_staff, is_superuser=is_superuser,
                        last_login=now,
                        **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_user(self, user_name, password, **extra_fields):
        return self._create_user(user_name, password, **extra_fields)

    def create_staffuser(self, user_name, password, **extra_fields):
        return self._create_user(user_name, password,
                                 is_staff=True, **extra_fields)

    def create_superuser(self, user_name, password, **extra_fields):
        return self._create_user(user_name, password,
                                 is_staff=True, is_superuser=True,
                                **extra_fields)

class BaseUser(AbstractBaseUser):
    #Add validators
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255, unique=True, primary_key=True)
    email = models.EmailField(max_length=100, unique=True)
    mobile = models.IntegerField(unique=True)
    dob = models.DateField(blank=True, null=True)
    bookmarks = jsonfield.JSONField(default={})
    profile_pic = models.ImageField(
        upload_to=profile_pic_storage,
        default="/default/user/profile_pic.png"
        )

    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    #required by simple-jwt
    id = models.CharField(max_length=255,)

    class Meta:
        verbose_name = "BaseUser"

    USERNAME_FIELD = 'user_name'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = [
        'first_name',
        'last_name',
        'email',
        'mobile',
        'profile_pic',
        'dob'
    ]

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def user_type(self):
        try:
            if self.user:
                return "user"
        except:
            pass
        try:
            if self.celeb:
                return "celeb"
        except:
            pass
        return None
    
    objects = UserManager()

class Celeb(models.Model):
    CITY_CHOICES = (
        ('BANGALORE', 'Bangalore'),
        ('COCHIN', 'Cochin'),
        ('DELHI', 'Delhi'),
        ('HYDERABAD','Hyderabad'),
        ('KOLKATA', 'Kolkata'),
        ('MUMBAI', 'Mumbai'),
    )
    base_user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)    
    rating = models.PositiveSmallIntegerField(default=0)
    category = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    handles = jsonfield.JSONField()
    tags = jsonfield.JSONField()
    city = models.CharField(max_length=100, choices=CITY_CHOICES)

    def __str__(self):
        return self.base_user.full_name
    
class User(models.Model):
    SUBSCRIPTION_CHOICES = (
        ('free', 'free'),
        ('platinum', 'platinum'),
        ('diamond', 'diamond')
    )

    base_user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)

    # Subscription Details
    subscription = models.CharField(max_length=100, choices=SUBSCRIPTION_CHOICES, default='free')
    free_invites = models.IntegerField(default=0)
    last_reset = models.DateField(auto_now_add=True, blank=True, null=True)
    sub_expires = models.DateTimeField(auto_now_add=True, blank=True, null=True) 

    def __str__(self):
        return self.base_user.full_name

    # Used by schedulers
    # Override is required for first reset after just after subscribing
    def reset_free_invites(self, initial=False):
        today = timezone.now()
        if self.last_reset.month < timezone.now().month or initial:
            self.free_invites = subscription_details[self.subscription]['free_invites']
            self.last_reset = timezone.now()
            self.save()
        else:
            print("Already reset Invites For this month") # Raise error to logs here

    @property
    def has_free_invites(self):
        return self.free_invites > 0

    @property
    def invite_fee(self):
        return subscription_details[self.subscription]['invite_fee']
