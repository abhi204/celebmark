from django.db import models
from useraccount.models import User, Celeb
import uuid

# Create your models here.
class Invite(models.Model):
    PAYMENT_STATUS_CHOICES = (
        ('pending', 'pending'),
        ('paid', 'paid'),
        ('failed', 'failed')
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    celeb = models.ForeignKey(Celeb, on_delete=models.SET_NULL, null=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False)
    event_type = models.CharField(max_length=100, default="College Event")
    role = models.CharField(max_length=100)
    city = models.CharField(max_length=100, default="MUMBAI")
    event_date = models.DateField()
    venue = models.TextField()
    description = models.TextField(blank=True)
    payment_status = models.CharField(max_length=50, choices=PAYMENT_STATUS_CHOICES, default="pending")

    def __str__(self):
        return f'{self.user.base_user.user_name} -> {self.celeb.base_user.full_name}'