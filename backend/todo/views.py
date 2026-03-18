from django.shortcuts import render
from rest_framework import viewsets,filters
from .models import TODO,CustomUser
from .serializers import TODOSerializer,CustomUserSerializer
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.




class TODOViewset(viewsets.ModelViewSet):
  
  
    queryset=TODO.objects.all()
    serializer_class=TODOSerializer
    filter_backends=[DjangoFilterBackend,filters.OrderingFilter,filters.SearchFilter]
    
    filterset_fields=['title','user','is_completed']
    ordering_fields=['is_completed','created_at','updated_at']
    search_fields=['title']
    
    
class CustomUserViewset(viewsets.ModelViewSet):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer

    
    