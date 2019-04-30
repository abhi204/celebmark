from datetime import date, timedelta
from invite.models import Invite
from payment.models import Payment
from useraccount.subscription_details import subscription_details

# Create Payment record For With reference to an Invite payment
def create_invite_payment(data):
    data['invite'] = Invite.objects.get(payment_request_id=data['payment_request_id'])
    Payment.objects.update_or_create(payment_id=data['payment_id'], defaults=data)

def create_subscription_payment(data):
    Payment.objects.update_or_create(payment_id=data['payment_id'], defaults=data)
    
    # Purpose format => "subscribe {name of subscription}"
    subscription_detail = subscription_details[data['purpose'].split()[1]] 

    user_obj = data['user']
    user_obj.subscription = subscription_detail['name']
    user_obj.subscription_expiration = date.today() + timedelta(weeks=subscription_detail['duration_months']*4)
    user_obj.save()


