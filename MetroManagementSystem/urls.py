# MetroManagementSystem/urls.py

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Metro.urls')),  # Include the URLs from the 'Metro' app
]
