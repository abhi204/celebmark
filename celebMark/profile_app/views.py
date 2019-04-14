from django.shortcuts import render
from useraccount.models import Celeb
from .serializers import CelebViewSerializer
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework import permissions
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

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