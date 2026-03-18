from django.contrib import admin
from django.conf import settings
# Register your models here.
from .models import TODO,CustomUser

admin.site.register(TODO)
admin.site.register(CustomUser)