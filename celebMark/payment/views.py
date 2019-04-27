from .models import Payment
from django.shortcuts import render
from invite.models import Invite
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from useraccount.models import BaseUser

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
            self.invite_pay(pay_data, user_obj)
        return Response(status=200)

    def invite_pay(self, data, user):
        invite_obj = Invite.objects.get(payment_request_id=data['payment_request_id'])
        Payment.objects.create(**data, user=user, invite=invite_obj)