from rest_framework import serializers
from .models import Aktualnosci, User, Photos, DownloadFile



class AktualnosciSerializer(serializers.ModelSerializer):

    username = serializers.SerializerMethodField('get_username')

    class Meta:
        model = Aktualnosci
        fields = ('id', 'poster', 'title', 'title_image', 'content','content_preview', 'date', 'archived', 'username')

    def get_username(self, name):
        username = name.poster.username
        return username

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = ('__all__')

class DownloadFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DownloadFile
        fields = ('__all__')