from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User


def index(request):
    if request.method == "POST":
        errors = User.objects.validate(request.POST)
        if len(errors) > 0:
            for error in errors.values():
                messages.error(request, error)
        else:
            messages.info(request, "Successfully Registered")
            User.objects.add_user(request.POST)
        return redirect('/')
    return render(request, 'loginreg/index.html')


def login(request):
    if User.objects.login_valid(request.POST):
        user = User.objects.get(username=request.POST['username'])
        request.session['username'] = user.username
        request.session['id'] = user.id
    else:
        messages.info(request, "Login Unsuccessful")
    return redirect('/loggedin/')


def loggedin(request):
    if 'username' in request.session:
        return redirect('/wall/')
    return redirect('/')


def logout(request):
    del request.session['username']
    return redirect('/')
