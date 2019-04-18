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
    profile_pic = models.ImageField(
        upload_to=profile_pic_storage,
        default="/default/user/profile_pic.png"
        )

    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    #required by simple-jwt
    id = models.CharField(max_length=255, blank=True)

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

    objects = UserManager()

class Celeb(models.Model):
    base_user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)    
    rating = models.PositiveSmallIntegerField(default=0)
    category = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    handles = jsonfield.JSONField()
    tags = jsonfield.JSONField()

    def __str__(self):
        return self.base_user.full_name
    
class User(models.Model):
    base_user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)
    has_invites = models.IntegerField(default=0)

    def __str__(self):
        return self.base_user.full_name

