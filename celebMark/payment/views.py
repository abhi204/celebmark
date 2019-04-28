from .helpers import create_invite_payment
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
        pay_data = {}
        for field in Payment._meta.get_fields():
            if field.name in post_data.keys():
                pay_data.update({field.name: post_data[field.name]})
        
        # Check and pass payment to appropriate view method
        user_obj = BaseUser.objects.get(email=post_data['buyer']).user
        if post_data['purpose'] == 'invite':
            create_invite_payment(pay_data, user_obj)
        return Response(status=200)

class CheckPayStatusView(APIView):
    permission_classes = [ permissions.IsAuthenticated, UserOnly ]

    def get(self, request):
        payment_id = request.GET['payment_id']
        payment_request_id = request.GET['payment_request_id']
        im_response = im_api.payment_request_payment_status(
            payment_request_id,
            payment_id
            )
        im_response = im_response['payment_request'].copy()
        im_response.update(im_response['payment'])
        im_response['payment_request_id'] = payment_request_id
        im_response['payment_id'] = payment_id

        pay_data = {}
        for field in Payment._meta.get_fields():
            if field.name in im_response:
                pay_data.update({field.name: im_response[field.name]})

        user_obj = BaseUser.objects.get(email=im_response['buyer_email']).user
        if pay_data['purpose'] == 'invite':
            create_invite_payment(pay_data, user_obj)
        return Response({ 'status': pay_data['status']})