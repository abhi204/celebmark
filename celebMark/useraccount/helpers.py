from django.utils import timezone
from rest_framework.permissions import BasePermission
from useraccount.models import BaseUser, User
from useraccount.subscription_details import subscription_details
from useraccount.tasks import future_invite_reset

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

'''
    Start celery tasks to reset invites every month
'''
def start_future_invite_resets(user):
    months = subscription_details[user.subscription]['duration_months']
    for month in range(1, months): # for 3 months => month: 1,2 (i.e. future_months)
        future_time = timezone.now() + timezone.timedelta(weeks=month*4)
        future_invite_reset.apply_async(
            ( user.base_user.user_name, user.sub_expires ), # Args to function
            eta=future_time, # Time in future when function executes
            retry=True,
            retry_policy={
                'interval_start': 5,
                'interval_step': 5,
            }
        )
    #Add logging code HERE