from . import views
from django.urls import path, re_path
from rest_framework.routers import DefaultRouter

urlpatterns = [

]

''' For generating viewset urls '''
router = DefaultRouter()
router.register(r'', views.CelebViewSet, basename="celeb")

urlpatterns += router.urls
