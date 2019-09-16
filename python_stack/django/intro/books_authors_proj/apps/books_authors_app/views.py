from django.shortcuts import render, redirect
from . import models


def books(request):
    context = {
        'books': models.Book.objects.all().values()
    }
    return render(request, 'books_authors_app/books.html', context)


def createbook(request):
    the_title = request.POST['title']
    the_desc = request.POST['description']
    if len(the_title) > 1:
        models.Book.objects.create(title=the_title, desc=the_desc)
    return redirect('/')


def viewbook(request, id):
    the_book = models.Book.objects.get(id=id)
    context = {
        'book': the_book,
        'not_authors': models.Author.objects.exclude(books=the_book)
    }
    return render(request, 'books_authors_app/viewbook.html', context)


def addauthor(request):
    auth_id = request.POST['author']
    book_id = request.POST['book']
    book = models.Book.objects.get(id=book_id)
    author = models.Author.objects.get(id=auth_id)
    book.authors.add(author)
    book.save()
    return redirect('/viewbook/' + book_id)


def authors(request):
    context = {
        'authors': models.Author.objects.all().values()
    }
    return render(request, 'books_authors_app/authors.html', context)


def viewauthor(request, id):
    the_auth = models.Author.objects.get(id=id)
    context = {
        'author': models.Author.objects.get(id=id),
        'not_books': models.Book.objects.exclude(authors=the_auth)
    }
    return render(request, 'books_authors_app/viewauthor.html', context)


def createauthor(request):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    notes = request.POST['notes']
    if len(first_name) > 1:
        models.Author.objects.create(first_name=first_name, last_name=last_name, notes=notes)
    return redirect('/authors')


def addbook(request):
    auth_id = request.POST['author']
    book = models.Book.objects.get(id=request.POST['book'])
    author = models.Author.objects.get(id=auth_id)
    author.books.add(book)
    author.save()
    return redirect('/viewauthor/' + auth_id)
