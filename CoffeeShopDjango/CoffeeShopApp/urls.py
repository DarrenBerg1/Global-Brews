from django.urls import path
from . import views

urlpatterns = [
   # path('', views.index),
    path('signup/', views.user_sign_up, name='signup'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('curruser/', views.current_user, name='curruser'),
    path('deluser/', views.delete_user, name='deluser'),
    path('', views.send_index, name='index'),
]