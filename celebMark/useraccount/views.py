from django.shortcuts import get_object_or_404
from .helpers import unique_fields
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import CreateAPIView, RetrieveAPIView
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

@api_view(['HEAD'])
@permission_classes([permissions.AllowAny])
def check_unique(request):
    params = dict(**request.query_params)
    if len(params) == 1 and list(params.keys())[0] in unique_fields():
        key,value = params.popitem()
        value = ''.join(value)
        user = get_object_or_404(User, **{key: value})
        return Response(status=200) if user else Response(status=404)
    return Response(status=403)
