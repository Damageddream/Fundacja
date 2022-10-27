from rest_framework import serializers
from .models import Aktualnosci


class AktualnosciSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aktualnosci
        fields = ('id', 'poster', 'title', 'title_image', 'content', 'date', 'archived')