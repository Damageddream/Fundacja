from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import action
from rest_framework import viewsets
from .serializers import AktualnosciSerializer, UserSerializer, PhotosSerializer, DownloadFileSerializer
from .models import User, Aktualnosci, Photos, DownloadFile
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.

class AktualnosciView(viewsets.ModelViewSet):
    serializer_class = AktualnosciSerializer
    parser_classes = (MultiPartParser, FormParser)
    queryset = Aktualnosci.objects.all()

class PhotosView(viewsets.ModelViewSet):
    serializer_class = PhotosSerializer
    parser_classes = (MultiPartParser, FormParser)
    queryset = Photos.objects.all()

    def perform_create(self, serializer):
        serializer.save()

class DownloadFileView(viewsets.ModelViewSet):
    serializer_class = DownloadFileSerializer
    parser_classes = (MultiPartParser, FormParser)
    queryset = DownloadFile.objects.all()

    def perform_create(self, serializer):
        serializer.save()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()



