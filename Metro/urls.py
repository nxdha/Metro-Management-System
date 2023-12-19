from django.urls import path
from .views import home  # Import the view function

urlpatterns = [
    path('', home, name='home'),  # Map the root URL to the home view
]
