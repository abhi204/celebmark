from django.urls import path, re_path
from . import views

urlpatterns = [
    path('register/',views.register_user.as_view(), name='register-user'),
    path('register/celeb', views.register_celeb.as_view(), name='register-celeb'),
    path('details/', views.UserDetailView.as_view()),
    re_path('check/', views.check_unique,), #check if given value already exists
]
