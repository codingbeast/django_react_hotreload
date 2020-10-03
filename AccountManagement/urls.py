from django.urls import path
from django.conf.urls import url
from .views import UserLogin, UserRegister, base_view

urlpatterns = [
    path('login/', UserLogin.as_view(), name = "UserLogin"),
    path('register/', UserRegister.as_view(), name = "UserRegister"),
    url(r'', base_view),
]
