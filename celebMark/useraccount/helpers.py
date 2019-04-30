from rest_framework.permissions import BasePermission
from useraccount.models import BaseUser

def unique_fields():
    unique_fields = []
    for field in BaseUser._meta.get_fields():
        try:
            if field.unique:
                unique_fields.append(field.name)
        except:
            pass
    return unique_fields

'''
    The view permission to check if user is User
'''
class UserOnly(BasePermission):
    def has_permission(self, request, view):
        return request.user.user_type == 'user'