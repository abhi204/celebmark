from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path('^search/?', views.CelebListView.as_view()),
    path('view/<str:pk>/', views.CelebProfileView.as_view()),
]
