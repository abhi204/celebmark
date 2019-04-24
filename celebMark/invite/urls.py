from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [

]

router = DefaultRouter()
router.register(r'', views.InviteViewset, basename='invite')

urlpatterns += router.urls
