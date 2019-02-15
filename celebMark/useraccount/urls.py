from django.urls import path
from . import views

urlpatterns = [
    path('register',views.register_user.as_view(), name='register-user'),
]