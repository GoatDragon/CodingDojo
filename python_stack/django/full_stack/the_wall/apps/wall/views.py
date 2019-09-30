from django.shortcuts import render, redirect
from .models import *


def wall(request):
    content = {
        "messages": Message.objects.all().order_by('-created_at'),
        "comments": Comment.objects.all()
    }
    return render(request, 'wall/index.html', content)


def post(request):
    Message.objects.post_message(
        request.POST['message'],
        request.session['id']
    )
    return redirect('/wall/')


def comment(request):
    Comment.objects.post_comment(
        request.POST['comment'],
        request.session['id'],
        request.POST['message_id']
    )
    return redirect('/wall/')


def delete(request):
    Comment.objects.delete_comment(request.POST['comment_id'])
    return redirect('/wall/')
