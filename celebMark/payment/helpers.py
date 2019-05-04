from django.utils import timezone
from invite.models import Invite
from payment.models import Payment
from useraccount.subscription_details import subscription_details
from uuid import uuid4

# Create Payment record For With reference to an Invite payment
def create_invite_payment(data):
    data['invite'] = Invite.objects.get(payment_request_id=data['payment_request_id'])
    payment_obj, created = Payment.objects.update_or_create(payment_id=data['payment_id'], defaults=data)
    return payment_obj

def create_subscription_payment(data):
    # Purpose format => "subscribe {name of subscription}"
    subscription_detail = subscription_details[data['purpose'].split()[1]] 
    
    user_obj = data['user']
    user_obj.subscription = subscription_detail['name']
    user_obj.sub_expires = timezone.now() + timezone.timedelta(weeks=subscription_detail['duration_months']*4)
    user_obj.reset_free_invites(override=True)
    user_obj.save()

    payment_obj, created = Payment.objects.update_or_create(payment_id=data['payment_id'], defaults=data)
    return payment_obj

# Create Free Invite Based Payment record using free invites of user
# And also decrement the user's free invite count
def create_free_invite_payment(invite_obj, user):
    payment_id = 'CMARK' + str(uuid4()).replace('-','')

    data = {
        'payment_request_id': invite_obj.payment_request_id,
        'payment_id': payment_id,
        'purpose': f'invite {invite_obj.celeb.base_user.user_name}',
        'status': 'Credit',
        'amount': 0,
        'fees': 0,
        'user': user,
        'invite': invite_obj,
    }

    user.free_invites -= 1
    user.save()

    return create_invite_payment(data)
