from django.shortcuts import render

# Create your views here.
# views.py
from django.shortcuts import render

# Create your views here.


def index_view(request):
    return render(request, 'frontend/index.html', context=None)
