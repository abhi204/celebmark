from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from useraccount.models import User
from .serializers import UserSerializer

from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
# Create your views here.

class register_user(CreateAPIView):
    
    model = User
    serializer_class = UserSerializer
    
    permission_classes = [
        permissions.AllowAny,
    ]

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer