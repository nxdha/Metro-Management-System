from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def contact(request):
    return render(request, 'contact.html')

def metrologin(request):
    return render(request, 'metrologin.html')

def metrosignup(request):
    return render(request, 'metrosignup.html')