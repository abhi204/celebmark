from django.shortcuts import get_object_or_404
from .helpers import unique_fields
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from useraccount.models import User
from rest_framework.generics import CreateAPIView, ListAPIView
from useraccount.models import User, Celeb
from .serializers import UserRegisterSerializer, CelebRegisterSerializer, CelebViewSerializer
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
# Create your views here.

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class register_user(CreateAPIView):
    model = User
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny, ]

class register_celeb(CreateAPIView):
    model = Celeb
    serializer_class = CelebRegisterSerializer
    permission_classes = [permissions.AllowAny, ]

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

# View to Filter and return list of celebs
class CelebListView(ListAPIView):
    queryset = Celeb.objects.all()
    serializer_class = CelebViewSerializer # change this to a new serializer for celeb
    permission_classes = [permissions.AllowAny,]
    filter_backends = (filters.SearchFilter, DjangoFilterBackend)
    search_fields = ('=user_name', 'first_name', 'last_name', 'category')
    filterset_fields = ('email',)

class CelebProfileView(RetrieveAPIView):
    queryset = Celeb.objects.all()
    serializer_class = CelebViewSerializer
    permission_classes = [permissions.AllowAny,]
