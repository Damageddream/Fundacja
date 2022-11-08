from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AktualnosciSerializer, UserSerializer
from .models import User, Aktualnosci
from rest_framework.generics import RetrieveAPIView

# Create your views here.

class AktualnosciView(viewsets.ModelViewSet):
    serializer_class = AktualnosciSerializer
    queryset = Aktualnosci.objects.all()
       

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class AktualnosciDetailAPIView(RetrieveAPIView):
    serializer_class = AktualnosciSerializer
    queryset = Aktualnosci.objects.all()

def add_wydarzenie(request):
    if request.method == "POST":

        wydarzenie = Aktualnosci(
            poster = request.user,
            title = request.POST["tytul"],
            title_image = request.FILES["title_image"],
            content = request.POST["content"],
            content_preview = request.POST["preview"],
            archived = False,
        )
        wydarzenie.save()
        return render(request, 'add_wydarzenie.html')

    else:
        return render(request, 'add_wydarzenie.html')



