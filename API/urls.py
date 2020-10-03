from django.urls import path
from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('token/', obtain_auth_token, name='api_token_auth'),
    ]

