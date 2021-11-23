from rest_framework import serializers
from .models import Art

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = ['id','name','slug','artist','image','image','description','created_on']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = ['id','username','firstname','secondname']
