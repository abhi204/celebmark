from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from useraccount.models import BaseUser, Celeb, User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

#base user
exclude_fields = ['last_login', 'date_joined', 'is_active', 'is_staff', 'is_superuser', 'id']
public_fields = ['first_name', 'last_name', 'user_name', 'profile_pic', 'dob']
private_fields = ['password', 'mobile', 'email', 'bookmarks']
register_fields = public_fields + private_fields


class BaseUserSerializer(serializers.ModelSerializer):
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
    
    bookmarks = serializers.JSONField(required=False)


    def get_profile_pic(self, user_obj):
        return user_obj.profile_pic.url

    class Meta:
        model = BaseUser
        fields = register_fields
        read_only_fields = ('user_name',)
        extra_kwargs = {
            'password': { 'write_only': True }
        }

    # For Viewing User Details
    def to_representation(self, bu_obj):
        representation = super().to_representation(bu_obj)
        representation.pop('password')
        return representation

    # Update the BaseUser instance details
    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.mobile = validated_data.get('mobile', instance.mobile)
        instance.dob = validated_data.get('dob', instance.dob)
        return instance  

class UserSerializer(serializers.ModelSerializer):
    base_user = BaseUserSerializer(required=False)

    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ['free_invites', 'subscription', 'sub_expires']

    # For Viewing User Details
    def to_representation(self, user_obj):
        '''Move BaseUser fields to this serializer'''
        representation = super().to_representation(user_obj)
        baseuser_representation = representation.pop('base_user')
        for key in baseuser_representation:
            representation[key] = baseuser_representation[key]
        return representation

    # Select and pack flattened BaseUser fields into BaseUser key
    def to_internal_value(self, data):
        '''Move incoming BaseUser field keys back into user field'''
        base_user_internal = {}
        for key in BaseUserSerializer.Meta.fields:
            if key in data:
                base_user_internal[key]=data.pop(key)
        internal = super().to_internal_value(data)
        internal['base_user'] = base_user_internal
        base_user_serializer = BaseUserSerializer(data=base_user_internal)
        ''' validate For Base User '''
        base_user_serializer.is_valid(raise_exception=True)
        return internal

    # For registering a new User.
    # validated_data is proccessed first using to_internal_value
    def create(self, validated_data):
        base_user_data = validated_data.pop('base_user')
        base_user = BaseUser.objects.create(**base_user_data, id=base_user_data['user_name'])
        base_user.set_password(base_user_data['password'])
        base_user.save()

        user = User.objects.create(base_user=base_user,**validated_data)
        user.save()
        return user
    
    def update(self, user_obj, validated_data):
        base_user_data = validated_data.pop('base_user')
        # update base_user partially
        base_user_serializer = BaseUserSerializer(user_obj,base_user, base_user_data, partial=True)
        base_user_serializer.is_valid(raise_exception=True)
        base_user_obj = base_user_serializer # get updated object (usaved)
        base_user_obj.save()
        # no other fields to be updated in User model
        return user_obj

class CelebListSerializer(serializers.ListSerializer):
    base_user = BaseUserSerializer()

    # recieves celeb_list from CelebSerializer to be trimmed
    def to_representation(self, celeb_list):
        """
        List of Celeb object instances -> List of dicts of primitive datatypes.
        """
        new_list = [] # reduced data in new list
        for celeb in celeb_list:
            new_list.append({
                'first_name': celeb.base_user.first_name,
                'last_name': celeb.base_user.last_name,
                'user_name': celeb.base_user.user_name,
                'profile_pic': celeb.base_user.get_profile_pic,
                'category': celeb.category,
            })        
        return new_list

class CelebSerializer(serializers.ModelSerializer):
    base_user = BaseUserSerializer(required=False)
    handles = serializers.JSONField()
    tags = serializers.JSONField()
    gallery = serializers.SerializerMethodField()

    def get_gallery(self, celeb_obj):
        return [ gallery_object.image_url for gallery_object in celeb_obj.gallery_set.all() ]

    class Meta:
        model = Celeb
        fields = '__all__'
        read_only_fields = ('rating', 'tags')
        list_serializer_class = CelebListSerializer

    def to_representation(self, celeb_obj):
        '''Move BaseUser fields of celeb_obj to this serializer'''
        representation = super().to_representation(celeb_obj)
        baseuser_representation = representation.pop('base_user')
        for key in baseuser_representation:
            representation[key] = baseuser_representation[key]
        return representation

    '''
    Move incoming BaseUser field keys back into user field
    Should return validated data or raise error
    '''
    def to_internal_value(self, data):
        '''de-serialize incoming data'''
        base_user_internal = {}
        for key in BaseUserSerializer.Meta.fields:
            if key in data:
                base_user_internal[key]=data.pop(key)
        internal = super().to_internal_value(data)
        internal['base_user'] = base_user_internal
        
        '''validate base user'''
        base_user_serializer = BaseUserSerializer(data=base_user_internal)
        base_user_serializer.is_valid(raise_exception=True)
        return internal

    def create(self, validated_data):
        base_user_data = validated_data.pop('base_user')
        base_user_serializer=BaseUserSerializer(data=base_user_data)
        base_user = BaseUser.objects.create(**base_user_data, id=base_user_data['user_name'])
        base_user.set_password(base_user_data['password'])
        base_user.save()

        celeb = Celeb.objects.create(base_user=base_user,**validated_data)
        celeb.save()
        return celeb

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, base_user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(base_user)
        # add BaseUser details
        token['user'] = {
            "name": base_user.full_name,
            "user_name": base_user.user_name,
            "mobile": base_user.mobile,
            "email": base_user.email,
            "bookmarks": base_user.bookmarks
        }
        return token