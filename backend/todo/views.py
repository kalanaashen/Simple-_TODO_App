from django.shortcuts import render
from rest_framework import viewsets,filters
from .models import TODO,CustomUser
from .serializers import TODOSerializer,CustomUserSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated,AllowAny

# Create your views here.




class TODOViewset(viewsets.ModelViewSet):
  
  
    
    serializer_class=TODOSerializer
    permission_classes=[IsAuthenticated]
    
    def get_queryset(self):
        return TODO.objects.filter(user=self.request.user)
        
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
    filter_backends=[DjangoFilterBackend,filters.OrderingFilter,filters.SearchFilter]
    
    filterset_fields=['title','user','is_completed']
    ordering_fields=['is_completed','created_at','updated_at']
    search_fields=['title']
    
    
class CustomUserViewset(viewsets.ModelViewSet):
    
    serializer_class = CustomUserSerializer

    def get_queryset(self):
        return CustomUser.objects.filter(id=self.request.user.id)

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]   # Register
        return [IsAuthenticated()]  # Protect others
    
    