from rest_framework import serializers
from .models import TODO,CustomUser


class TODOSerializer(serializers.ModelSerializer):
    class Meta:
        model=TODO
        fields="__all__"
        read_only_fields=['user']
        
        
        
        
class CustomUserSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'phonenumber', 'password']

    def create(self, validated_data):
        return CustomUser.objects.create_user(**validated_data)