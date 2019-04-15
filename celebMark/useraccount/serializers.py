from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from useraccount.models import BaseUser, Celeb, User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

#base user
exclude_fields = ['last_login', 'date_joined', 'is_active', 'is_staff', 'is_superuser', 'id']
public_fields = ['first_name', 'last_name', 'user_name', 'profile_pic','dob']
private_fields = ['password', 'mobile', 'email']
register_fields = public_fields + private_fields
 

class BaseUserRegisterSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(
            max_length=50,
            required=True,
            validators = [UniqueValidator(queryset=BaseUser.objects.all(), message="This username is already taken")]
    )
    email = serializers.EmailField(
            required=True,
            validators = [UniqueValidator(queryset=BaseUser.objects.all(), message="email already in use")]
    )
    mobile = serializers.IntegerField(
        required=True,
        validators = [UniqueValidator(queryset=BaseUser.objects.all(), message="number already registered")]
    )
    password = serializers.CharField(min_length=8)

    profile_pic = serializers.SerializerMethodField()

    def get_profile_pic(self, user_obj):
        return user_obj.profile_pic.url

    class Meta:
        model = BaseUser
        fields = register_fields
        write_only_fields = ('password',)
        read_only_fields = ('user_name',)


class CelebRegisterSerializer(serializers.ModelSerializer):
    user = BaseUserRegisterSerializer()
    handles = serializers.JSONField()

    class Meta:
        model = Celeb
        exclude = ['rating', 'tags']
    
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        base_user = BaseUser.objects.create(**user_data)
        celeb = Celeb.objects.create(user=base_user,**validated_data)
        celeb.save()
        return celeb

class UserRegisterSerializer(serializers.ModelSerializer):
    user = BaseUserRegisterSerializer()

    class Meta:
        model = User
        exclude = ['has_invites',]

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        base_user = BaseUser.objects.create(**user_data)
        user = User.objects.create(user=base_user,**validated_data)
        user.save()
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)
        #add user details
        token['user'] = {
            "name": user.get_name,
            "user_name":user.user_name,
            "mobile": user.mobile,
            "email": user.email
        }
        return token

