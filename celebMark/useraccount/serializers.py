from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from useraccount.models import User, Celeb

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

public_fields = ['first_name', 'last_name', 'user_name', 'profile_pic']
private_fields = ['password', 'mobile', 'email']
register_fields = public_fields + private_fields 
exclude_fields = ['last_login', 'date_joined', 'is_active', 'is_staff', 'is_superuser', 'id']

class CelebViewSerializer(serializers.ModelSerializer):
    handles = serializers.JSONField()
    tags = serializers.JSONField()
    class Meta:
        model = Celeb
        exclude = exclude_fields + private_fields

'''
 For both User and Celeb registration
'''
class UserRegisterSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(
            max_length=50,
            required=True,
            validators = [UniqueValidator(queryset=User.objects.all(), message="This username is already taken")]
    )
    email = serializers.EmailField(
            required=True,
            validators = [UniqueValidator(queryset=User.objects.all(), message="email already in use")]
    )
    mobile = serializers.IntegerField(
        required=True,
        validators = [UniqueValidator(queryset=User.objects.all(), message="number already registered")]
    )
    password = serializers.CharField(min_length=8)

    profile_pic = serializers.SerializerMethodField()

    def get_profile_pic(self, user_obj):
        return user_obj.profile_pic.url

    class Meta:
        model = User
        fields = register_fields
        write_only_fields = ('password',)
        read_only_fields = ('user_name',)

    def create(self, validated_data):
        user = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            user_name=validated_data['user_name'],
            mobile=validated_data['mobile'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class CelebRegisterSerializer(UserRegisterSerializer):
    handles = serializers.JSONField()

    class Meta:
        model = Celeb
        exclude = exclude_fields + ['description', 'tags']
    
    def create(self, validated_data):
        user = Celeb.objects.create(**validated_data)
        user.set_password(validated_data['password'])
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

