from django.shortcuts import render, HttpResponse, redirect,  HttpResponseRedirect
from django.urls import reverse
from django.views import View
from projectalfa.ConstantData import GetHost
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import requests
from django.contrib import messages
# Create your views here.


@method_decorator(csrf_exempt, name='dispatch')
class UserLogin(View):
    def get(self, request):
        if 'token' in request.session:
            return redirect(reverse("Shop:ProductsPage"))
        return render(request, "frontend/UserLogin.html")
    def post(self, request):
        if 'token' in request.session:
           return redirect(reverse("Shop:ProductsPage"))
        base = GetHost(request)
        login_auth = "{}/api/token/".format(base)
        username = request.POST.get("username")
        password = request.POST.get("password")
        body = {
            "username" : username,
            "password" : password,
        }
        response = requests.post(login_auth,data=body)
        if response.status_code != 200:
            messages.warning(request, f"Username or password is wrong")
            return redirect(reverse("AccountManager:UserLogin"))
        else:
            AuthKey = response.json()['token']
            #response = HttpResponseCookie("Cookie Set")  
            #response.set_cookie('token', AuthKey)
            request.session['token'] = AuthKey
            messages.info(request, f"You are now logged in as {username}")
            return redirect(reverse("Shop:ProductsPage"))
        return HttpResponse(AuthKey)

class UserRegister(View):
    def get(self, request):
        return render(request, "frontend/UserRegister.html")
def base_view(request):
    return HttpResponse("hello world")