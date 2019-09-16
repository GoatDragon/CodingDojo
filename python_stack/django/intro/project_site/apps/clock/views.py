from django.shortcuts import render, render_to_response
from time import gmtime, strftime


def index(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request, 'clock/index.html', context)


def css(request):
    return render_to_response('clock/styles.css')
