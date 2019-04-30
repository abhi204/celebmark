from .helpers import create_invite_payment, create_subscription_payment
from .im_api import im_api
from .models import Payment
from django.shortcuts import render
from invite.models import Invite
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from useraccount.models import BaseUser
from useraccount.helpers import UserOnly

# Create your views here.
class IMHookView(APIView):
    permission_classes = [ permissions.AllowAny, ]

    def post(self, request):
        post_data = request.POST.copy()

        # Collect relevant data from post request
        pay_data = {} # Data for Payment Object Creation
        for field in Payment._meta.get_fields():
            if field.name in post_data.keys():
                pay_data.update({field.name: post_data[field.name]})
        
        pay_data['user'] = BaseUser.objects.get(email=post_data['buyer']).user
        
        # Check and pass payment to appropriate method
        if pay_data['purpose'].startswith('invite'):
            create_invite_payment(pay_data)
        elif pay_data['purpose'].startswith('subscribe'):
            create_subscription_payment(pay_data)
        return Response(status=200)

class CheckPayStatusView(APIView):
    permission_classes = [ permissions.IsAuthenticated, UserOnly ]

    def post(self, request):
        payment_id = request.data['payment_id']
        payment_request_id = request.data['payment_request_id']
        
        im_response = im_api.payment_request_payment_status(
            payment_request_id,
            payment_id
        )
        if not im_response['success']:
            return Response({ 'status': 'Failed'})
        
        im_response = im_response['payment_request'].copy()
        im_response.update(
            payment_request_id=payment_request_id,
            **im_response['payment']
        )

        pay_data = {} # Data for Payment Object Creation
        for field in Payment._meta.get_fields():
            if field.name in im_response:
                pay_data.update({field.name: im_response[field.name]})
        pay_data['user'] = BaseUser.objects.get(email=im_response['buyer_email']).user

        # Check and pass payment to appropriate method
        if pay_data['purpose'].startswith('invite'):
            create_invite_payment(pay_data)
        elif pay_data['purpose'].startswith('subscribe'):
            create_subscription_payment(pay_data)
        return Response({ 'status': pay_data['status'], 'purpose': pay_data['purpose'] })