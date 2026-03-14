from django.contrib import admin
from django.conf import settings
# Register your models here.
from .models import TODO

admin.site.register(TODO)