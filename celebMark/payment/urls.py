from django.urls import path
from . import views

urlpatterns = [
    path('hook/', views.IMHookView.as_view()),
    path('check/', views.CheckPayStatusView.as_view()),
]