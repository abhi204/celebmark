from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from useraccount.models import User
from .serializers import UserSerializer
# Create your views here.

class register_user(CreateAPIView):
    
    model = User
    serializer_class = UserSerializer
    
    permission_classes = [
        permissions.AllowAny,
    ]

