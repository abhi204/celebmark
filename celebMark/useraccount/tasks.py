# Create your tasks here
from __future__ import absolute_import, unicode_literals
from celery import shared_task
from django.db.models import Q
from django.utils import timezone
from useraccount.models import User

# To be used By celery for daily checks and fast fixes
@shared_task(
    bind=True,
    default_retry_delay=60,
    max_retries=120,
    acks_late=True,
    ignore_result=True,
    queue="daily_invite_reset_queue",
)
def daily_invite_reset(self):
    today = timezone.now()
    try:
        users = User.objects.filter(
            ~Q(subscription='free'),
            ~Q(sub_expires__month = today.month),
            sub_expires__lt = today,
            sub_expires__day = today.day,
        )
        for user in users:
            user.reset_free_invites()
    except error as e:
        print("Unable To Check and reset daily Free Invites")
        # Log code HERE


# Send task on each new subscription
@shared_task(
    bind=True,
    default_retry_delay=60,
    max_retries=120,
    acks_late=True,
    ignore_result=True,
    queue='invite_reset_queue',
)
def future_invite_reset(self, user_name, old_sub_expires):
    today = timezone.now()
    user = User.objects.get(base_user__user_name=user_name)
    if user.sub_expires and user.sub_expires.isoformat() == old_sub_expires:
        user.reset_free_invites()
    # Log code HERE


