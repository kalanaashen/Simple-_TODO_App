from rest_framework.routers import DefaultRouter
from .views import TODOViewset,CustomUserViewset


router=DefaultRouter()
router.register(r'todos',TODOViewset,basename='todos')  
router.register(r'register',CustomUserViewset,basename='register')

urlpatterns=router.urls

                        