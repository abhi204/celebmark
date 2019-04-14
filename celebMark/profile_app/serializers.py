from rest_framework import serializers
from useraccount.models import Celeb

public_fields = ['first_name', 'last_name', 'user_name', 'profile_pic']
private_fields = ['password', 'mobile', 'email']
exclude_fields = ['last_login', 'date_joined', 'is_active', 'is_staff', 'is_superuser', 'id']

#For viewing Celeb profile
class CelebViewSerializer(serializers.ModelSerializer):
    handles = serializers.JSONField()
    tags = serializers.JSONField()
    profile_pic = serializers.SerializerMethodField()

    def get_profile_pic(self, user_obj):
        return user_obj.profile_pic.url
    
    class Meta:
        model = Celeb
        exclude = exclude_fields + private_fields