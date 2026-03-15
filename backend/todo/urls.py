from rest_framework.routers import DefaultRouter
from .views import TODOViewset


router=DefaultRouter()
router.register(r'todos',TODOViewset,basename='todos')  

urlpatterns=router.urls

                        