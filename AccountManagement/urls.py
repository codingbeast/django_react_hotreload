from django.urls import path
from django.conf.urls import url
from .views import UserLogin

urlpatterns = [
    path('', UserLogin.as_view(), name = "UserLogin"),
]
