from .serializers import CelebViewSerializer, CelebListSerializer
from django.shortcuts import render, get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
from useraccount.models import Celeb, BaseUser

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

class CelebBookmarkView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        celeb = request.data['celeb']
        user = request.user
        celebs_list = user.bookmarks.get('celebs',[])

        if celeb in celebs_list:                    # remove from celebs list
            user.bookmarks['celebs'].remove(celeb)
        elif celebs_list == []:                     # create celebs list and then insert
            user.bookmarks['celebs'] = [celeb,]
        else:                                       # add to existing celebs list
            user.bookmarks['celebs'].append(celeb)
        user.save()
        # Return New Bookmarks list
        return Response(request.user.bookmarks)

    def get(self, request):
        celebs_list = request.user.bookmarks.get('celebs',[])
        data = {}
        for user_name in celebs_list:
            data[user_name] = CelebListSerializer(Celeb.objects.get(base_user__user_name=user_name)).data
        return Response(data)