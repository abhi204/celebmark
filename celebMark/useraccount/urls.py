from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'^register/$',views.register_user.as_view(), name='register-user'),
    re_path(r'^token-auth/',views.CustomAuthToken.as_view(), name='get-auth-token')
]