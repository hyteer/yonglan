from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from .serializers import UserSerializer, GroupSerializer
from . import views

# Serializers define the API representation.

# Routers provide a way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^hello/$', views.hello_world),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^users/$', views.ListUsers.as_view()),
]
