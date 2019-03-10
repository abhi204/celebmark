from django.urls import path, re_path
from . import views

urlpatterns = [
    path('register/', views.register_user.as_view(), name='register-user'),
    re_path('^search/?', views.CelebListView.as_view()),
]
