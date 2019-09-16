from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('add/', views.add),
    path('show/<id>/', views.show),
    path('edit/<id>/', views.edit),
    path('delete/<id>/', views.delete)
]
