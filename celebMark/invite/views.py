from .models import Invite
from .serializers import InviteSerializer
from django.conf import settings
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from useraccount.helpers import UserOnly
from uuid import uuid4
from payment.im_api import im_api
from payment.helpers import create_free_invite_payment

# Create your views here.
class InviteViewset(ModelViewSet):
    serializer_class = InviteSerializer
    permission_classes = [permissions.IsAuthenticated, UserOnly]

    def get_queryset(self):
        return Invite.objects.filter(user=self.request.user.user)

    def create(self, request, *args, **kwargs):
        invite_response = super(ModelViewSet, self).create(request, *args, **kwargs)
        invite_obj = Invite.objects.get(id=invite_response.data['id'])
        
        if request.user.user.has_free_invites:
            invite_obj.payment_request_id = str(uuid4()).replace('-','') # Replace with something better
            invite_obj.save()
            
            payment = create_free_invite_payment(invite_obj, request.user.user)
            return Response({'invite': InviteSerializer(invite_obj).data })
        
        # Create Instamojo api endpoint
        response = im_api.payment_request_create(
            amount=str(request.user.user.invite_fee),
            purpose=f'invite {invite_obj.celeb.base_user.user_name}',
            buyer_name=request.user.full_name,
            email=request.user.email,
            phone=f'{request.user.mobile}',
            redirect_url=settings.IM_REDIRECT_URL,
            webhook=settings.IM_WEBHOOK,
            send_email=True,
            send_sms=True,
        )
        if not response['success']:
            print(response)
            return Response(status=500)
        
        invite_obj.payment_request_id = response['payment_request']['id']
        invite_obj.save()
        return Response({'payURL': response['payment_request']['longurl']})