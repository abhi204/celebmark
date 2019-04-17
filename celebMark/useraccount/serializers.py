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
    base_user = BaseUserRegisterSerializer(required=False)
    handles = serializers.JSONField()

    class Meta:
        model = Celeb
        exclude = ['rating', 'tags']

    def to_representation(self, obj):
        '''Move BaseUser fields to this serializer'''
        representation = super().to_representation(obj)
        baseuser_representation = representation.pop('base_user')
        for key in baseuser_representation:
            representation[key] = baseuser_representation[key]
        return representation

    def to_internal_value(self, data):
        '''Move incoming BaseUser field keys back into user field'''
        base_user_internal = {}
        for key in BaseUserRegisterSerializer.Meta.fields:
            if key in data:
                base_user_internal[key]=data.pop(key)
        internal = super().to_internal_value(data)
        internal['base_user'] = base_user_internal
        return internal
    
    def create(self, validated_data):
        base_user_data = validated_data.pop('base_user')

        '''check if base_user_data is valid'''
        base_user_serializer=BaseUserRegisterSerializer(data=base_user_data)
        if not base_user_serializer.is_valid():
            return base_user_serializer.is_valid(raise_exception=True)

        base_user = BaseUser.objects.create(**base_user_data)
        celeb = Celeb.objects.create(base_user=base_user,**validated_data)
        celeb.save()
        return celeb

class UserRegisterSerializer(serializers.ModelSerializer):
    ''' BaseUser fields are flattened'''
    base_user = BaseUserRegisterSerializer(required=False)

    class Meta:
        model = User
        exclude = ['has_invites',]

    def to_representation(self, obj):
        '''Move BaseUser fields to this serializer'''
        representation = super().to_representation(obj)
        baseuser_representation = representation.pop('base_user')
        for key in baseuser_representation:
            representation[key] = baseuser_representation[key]
        return representation

    def to_internal_value(self, data):
        '''Move incoming BaseUser field keys back into user field'''
        base_user_internal = {}
        for key in BaseUserRegisterSerializer.Meta.fields:
            if key in data:
                base_user_internal[key]=data.pop(key)
        internal = super().to_internal_value(data)
        internal['base_user'] = base_user_internal
        return internal

    def create(self, validated_data):
        base_user_data = validated_data.pop('base_user')

        '''check if base_user_data is valid'''
        base_user_serializer=BaseUserRegisterSerializer(data=base_user_data)
        if not base_user_serializer.is_valid():
            return base_user_serializer.is_valid(raise_exception=True)

        base_user = BaseUser.objects.create(**base_user_data)
        user = User.objects.create(base_user=base_user,**validated_data)
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

