from rest_framework import serializers
from .models import Aktualnosci, User, Photos, DownloadFile, ContactForm



class AktualnosciSerializer(serializers.ModelSerializer):

    class Meta:
        model = Aktualnosci
        fields = ('id', 'poster', 'title', 'title_image', 'content','content_preview', 'date', 'archived',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')
    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'],
                                       username=validated_data['username'],
                                         )
        user.set_password(validated_data['password'])
        user.save()
        return user

class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = ('__all__')

class DownloadFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DownloadFile
        fields = ('__all__')

class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = ('__all__')
