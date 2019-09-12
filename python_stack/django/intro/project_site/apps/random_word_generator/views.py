from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string


def index(request):
    content = {
        "random_word": get_random_string(length=42)
    }
    if 'count' not in request.session:
        request.session['count'] = 1
    else:
        request.session['count'] += 1
    return render(request, 'random_word_generator/index.html', content)


def reset(request):
    request.session['count'] = 0
    return redirect('/word')
