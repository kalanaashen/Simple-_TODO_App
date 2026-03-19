from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    
    phonenumber=models.CharField(max_length=10,blank=False)

    def __str__(self):
        return self.username

class TODO(models.Model):
    
    title=models.CharField(max_length=200,null=False,blank=False)
    description=models.TextField(null=False)
    is_completed=models.BooleanField(default=False)
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='todos')
    
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.title