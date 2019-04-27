from .models import Invite
from .serializers import InviteSerializer
from django.conf import settings
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from useraccount.helpers import UserOnly
from payment.im_api import im_api

# Create your views here.
class InviteViewset(ModelViewSet):
    serializer_class = InviteSerializer
    permission_classes = [permissions.IsAuthenticated, UserOnly]

    def get_queryset(self):
        return Invite.objects.filter(user=self.request.user.user)

    def create(self, request, *args, **kwargs):
        invite_response = super(ModelViewSet, self).create(request, *args, **kwargs)
        invite_object = Invite.objects.get(id=invite_response.data['id'])
        
        # Create Instamojo api endpoint
        # Create an Amount calc func in payments app and get the final amount here
        response = im_api.payment_request_create(
            amount='500', # TEST AMOUNT
            purpose='invite',
            buyer_name=request.user.full_name,
            email=request.user.email,
            phone=f'{request.user.mobile}',
            redirect_url=settings.IM_REDIRECT_URL,
            webhook=settings.IM_WEBHOOK,
            send_email=True,
            send_sms=True,
        )
        if not response['success']:
            return Response(status=500)
        
        invite_object.payment_request_id = response['payment_request']['id']
        invite_object.save()
        return Response({'payURL': response['payment_request']['longurl']})