from .models import Invite
from .serializers import InviteSerializer
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from useraccount.helpers import UserOnly

# Create your views here.
class InviteViewset(ModelViewSet):
    serializer_class = InviteSerializer
    permission_classes = [permissions.IsAuthenticated, UserOnly]

    def get_queryset(self):
        return Invite.objects.filter(user=self.request.user.user)