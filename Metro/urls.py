from django.urls import path
from .views import contact, home, metrologin, metrosignup  # Import the view function

urlpatterns = [
    path('', home, name='home'),  # Map the root URL to the home view
    path('contact/', contact, name='contact'),
    path('login/', metrologin, name='metrologin'),
    path('signup/', metrosignup, name='metrosignup'),
]
