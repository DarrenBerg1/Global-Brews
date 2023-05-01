from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import Customer
from django.core.serializers import serialize
import json

# Create your views here.

def index(request):
    homepage=open('static/index.html').read()
    return HttpResponse(homepage)

@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    try: 
        new_user = Customer.objects.create_user(username= email, email= email, name= name, password= password)
        return JsonResponse({'success': f"{name}, user was created."})
    except Exception as e:
        print(e)
    print('success')
    return JsonResponse({'success': False})
    
@api_view(["POST"])
def user_login(request):
    email = request.data['email']
    password = request.data['password']
    # print(request._request)
    user = authenticate(username = email, password = password)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({'email': user.email, 'name': user.name})
        except Exception as e:
            print(e)
            return JsonResponse({'login': False})
    return JsonResponse({'login': False})

@api_view(["GET"])
def current_user(request):
    print(request.user)
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({'user': None})
    
@api_view(["POST"])
def user_logout(request):
    try:
        logout(request)
        return JsonResponse({'logout': True})
    except Exception as e:
        print(e)
        return JsonResponse({'logout': False})
    
def send_index(request):
    index = open('./static/index.html')
    return HttpResponse(index)


@api_view(["POST"])
def delete_user(request):
    print(request.data)
    try:
        email = request.data.get('email', [])[0]
        password = request.data.get('password', [])[0]

        user = Customer.objects.get(email=email, password=password)
        user.delete()

        return JsonResponse({'user_deleted': 'deleted'})
    except Exception as e:
        print(e)
        return JsonResponse({'user_deleted': 'failed to delete'})

   
  




