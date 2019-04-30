from invite.models import Invite
from payment.models import Payment

# Create Payment record For With reference to an Invite payment
def create_invite_payment(data, user):
    invite_obj = Invite.objects.get(payment_request_id=data['payment_request_id'])
    Payment.objects.update_or_create(**data, user=user, invite=invite_obj)