from rest_framework import permissions
from rest_framework.generics import CreateAPIView, ListAPIView
from useraccount.models import User
from .serializers import UserSerializer
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

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

# View to Filter and return list of celebs
class CelebListView(ListAPIView):
    queryset = User.objects.all() # change to celeb user model
    serializer_class = UserSerializer # change this to a new serializer for celeb
    permission_classes = [permissions.AllowAny,]
    filter_backends = (filters.SearchFilter, DjangoFilterBackend)
    search_fields = ('=user_name', 'first_name', 'last_name')
    filterset_fields = ('email',)
