from django.shortcuts import render

from rest_framework import viewsets
from .serializers import AktualnosciSerializer, UserSerializer
from .models import User, Aktualnosci

# Create your views here.

class AktualnosciView(viewsets.ModelViewSet):
    serializer_class = AktualnosciSerializer
    queryset = Aktualnosci.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

def add_wydarzenie(request):
    return render(request, 'add_wydarzenie.html')