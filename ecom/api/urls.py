from django.urls import path, include
from django.urls.resolvers import URLPattern
from rest_framework.authtoken import views
from .views import home

urlpatterns = [
    path('', home, name="api.home")
]