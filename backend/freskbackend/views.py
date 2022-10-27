from django.shortcuts import render

from rest_framework import viewsets
from .serializers import AktualnosciSerializer
from .models import Todo, Aktualnosci

# Create your views here.

class AktualnosciView(viewsets.ModelViewSet):
    serializer_class = AktualnosciSerializer
    queryset = Aktualnosci.objects.all()