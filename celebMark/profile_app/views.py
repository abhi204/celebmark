from .serializers import CelebViewSerializer, CelebListSerializer
from django.shortcuts import render, get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions, filters
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
from useraccount.models import Celeb

class CelebViewSet(ReadOnlyModelViewSet):
    # For listing Celebs
    serializer_class = CelebListSerializer
    queryset = Celeb.objects.all()
    permission_classes = [permissions.AllowAny,]
    filter_backends = (filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend)
    search_fields = ('=base_user__user_name', '=base_user__email', 'base_user__first_name', 'base_user__last_name')
    filterset_fields = ('category', 'city')
    ordering_fields = ('base_user__first_name', 'rating')

    # For retreiving profile
    def retrieve(self, request, pk=None):
        celeb = get_object_or_404(self.queryset, base_user__user_name=pk)
        serializer = CelebViewSerializer(celeb)
        return Response(serializer.data)