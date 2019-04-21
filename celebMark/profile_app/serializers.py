from rest_framework import serializers
from useraccount.models import Celeb, BaseUser

# BaseUser
exclude_fields = ['last_login', 'date_joined', 'is_active', 'is_staff', 'is_superuser', 'id', 'password']
private_fields = ['mobile', 'email']
public_fields = ['first_name', 'last_name', 'user_name', 'profile_pic']
# Celeb
celeb_public_fields = ['handles', 'gallery', 'category']

class BaseUserSerializer(serializers.ModelSerializer):
    profile_pic = serializers.SerializerMethodField()
    bookmarks = serializers.JSONField(required=False)

    def get_profile_pic(self, user_obj):
        return user_obj.profile_pic.url
    
    class Meta:
        model = BaseUser
        exclude = exclude_fields + private_fields

#For viewing Celeb profile (Profile edits via useraccount serializers)
class CelebViewSerializer(serializers.ModelSerializer):
    base_user = BaseUserSerializer()
    handles = serializers.JSONField()
    tags = serializers.JSONField()
    gallery = serializers.SerializerMethodField()

    def get_gallery(self, user_obj):
        return [ gallery_object.image_url for gallery_object in user_obj.gallery_set.all() ]

    def to_representation(self, obj):
        '''Move BaseUser fields to this serializer'''
        representation = super().to_representation(obj)
        print(representation)
        baseuser_representation = representation.pop('base_user')
        for key in baseuser_representation:
            if key in public_fields:
                representation[key] = baseuser_representation[key]
        return representation
    
    class Meta:
        model = Celeb
        fields = '__all__'

class CelebListSerializer(serializers.ModelSerializer):
    base_user = BaseUserSerializer()

    def to_representation(self, obj):
        '''Move BaseUser fields to this serializer'''
        representation = super().to_representation(obj)
        baseuser_representation = representation.pop('base_user')
        for key in baseuser_representation:
            if key in public_fields:
                representation[key] = baseuser_representation[key]
        return representation

    class Meta:
        model = Celeb
        fields = ['base_user', 'category',] 