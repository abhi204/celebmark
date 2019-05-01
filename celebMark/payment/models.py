from django.db import models
from useraccount.models import User
from invite.models import Invite

# Create your models here.
class Payment(models.Model):
    STATUS_CHOICES = (
        ('Pending', 'Pending'),
        ('Credit', 'Credit'),
        ('Failed', 'Failed')
    )
    payment_id = models.TextField(primary_key=True)
    payment_request_id = models.TextField(unique=True)
    mac = models.TextField(blank=True, null=True)
    purpose = models.CharField(max_length=100, default="")
    status = models.CharField(max_length=100, choices=STATUS_CHOICES, default='Pending')
    amount = models.FloatField()
    fees = models.FloatField()

    # Relational Fields
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    invite = models.OneToOneField(Invite, on_delete=models.SET_NULL, null=True)