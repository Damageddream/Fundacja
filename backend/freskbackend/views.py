from rest_framework import viewsets
from .serializers import AktualnosciSerializer, UserSerializer, PhotosSerializer, DownloadFileSerializer, ContactFormSerializer
from .models import User, Aktualnosci, Photos, DownloadFile, ContactForm
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny

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

class ContactView(viewsets.ModelViewSet):
    serializer_class = ContactFormSerializer
    queryset = ContactForm.objects.all()

    def perform_create(self, serializer):
        serializer.save()



class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    