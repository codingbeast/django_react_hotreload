from django.shortcuts import render,  HttpResponse
from django.views import View
# Create your views here.
class UserLogin(View):
    def get(self, request):
        return render(request, "frontend/UserLogin.html")