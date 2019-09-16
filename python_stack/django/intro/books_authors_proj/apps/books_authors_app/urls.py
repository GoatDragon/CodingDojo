from django.urls import path
from . import views

urlpatterns = [
    path('', views.books),
    path('createbook/', views.createbook),
    path('viewbook/<id>', views.viewbook),
    path('addauthor/', views.addauthor),
    path('authors/', views.authors),
    path('createauthor/', views.createauthor),
    path('viewauthor/<id>', views.viewauthor),
    path('addbook/', views.addbook)
]
