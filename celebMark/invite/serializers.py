from .models import Invite
from rest_framework import serializers
from useraccount.models import Celeb, User, BaseUser

class UserField(serializers.Field):
    default_error_messages = {
    'invalid_value': 'No user exists with the given user_name: {input_user_name}'
    }
    def to_representation(self, user_obj):
        return user_obj.base_user.user_name
    def to_internal_value(self, user_name):
        if not BaseUser.objects.filter(user_name=user_name).exists():
            self.fail('invalid_value', input_user_name=user_name)
        return BaseUser.objects.get(user_name=user_name).user

class CelebField(serializers.Field):
    default_error_messages = {
    'invalid_value': 'No celeb exists with the given user_name: {input_user_name}'
    }
    def to_representation(self, celeb_obj):
        return celeb_obj.base_user.user_name
    def to_internal_value(self, user_name):
        if not BaseUser.objects.filter(user_name=user_name).exists():
            self.fail('invalid_value', input_user_name=user_name)
        return BaseUser.objects.get(user_name=user_name).celeb

class InviteSerializer(serializers.ModelSerializer):
    user = UserField()
    celeb = CelebField()

    class Meta:
        model = Invite
        fields = '__all__'