from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from useraccount.models import User
from .serializers import UserSerializer

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
# Create your views here.

class register_user(CreateAPIView):
    
    model = User
    serializer_class = UserSerializer
    
    permission_classes = [
        permissions.AllowAny,
    ]

class CustomAuthToken(ObtainAuthToken):
    #user posts user_name and password here to recieve auth token and other details
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        
        return Response({
            'token': token.key,
            'user_name': user.user_name,
            'email': user.email,
            'name': user.first_name,
        })