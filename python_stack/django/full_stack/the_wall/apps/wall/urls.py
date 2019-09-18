from django.urls import path
from . import views

urlpatterns = [
    path('', views.wall),
    path('post/', views.post),
    path('comment/', views.comment)
]
