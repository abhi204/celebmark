from rest_framework import serializers
from .models import Payment

class PaymentViewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        exclude = ['payment_id',]