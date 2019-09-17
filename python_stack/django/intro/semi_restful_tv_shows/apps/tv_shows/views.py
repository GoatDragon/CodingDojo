from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Show


def index(request):
    contents = {
        "shows": Show.objects.all()
    }
    return render(request, 'tv_shows/index.html', contents)


def add(request):
    if request.method == "POST":
        errors = Show.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            print(messages.error)
            return redirect('/add')
        show = Show.objects.create(
            title=request.POST['title'],
            network=request.POST['network'],
            release_date=request.POST['release_date'],
            description=request.POST['description']
        )
        return redirect('/show/' + str(show.id))
    else:
        return render(request, 'tv_shows/add.html')


def show(request, id):
    contents = {
        "show": Show.objects.get(id=id)
    }
    return render(request, 'tv_shows/show.html', contents)


def edit(request, id):
    show = Show.objects.get(id=id)
    if request.method == "POST":
        errors = Show.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            print(messages.error)
            return redirect('/edit/' + str(id))
        show.title = request.POST['title']
        show.network = request.POST['network']
        show.release_date = request.POST['release_date']
        show.description = request.POST['description']
        show.save()
        return redirect('/show/' + id)
    else:
        show = Show.objects.get(id=id)
        month = 0
        day = 0
        if show.release_date.month < 10:
            month = f"0{show.release_date.month}"
        else:
            month = show.release_date.month
        if show.release_date.day < 10:
            day = f"0{show.release_date.day}"
        else:
            day = show.release_date.day
        contents = {
            "show": show,
            "releasedate": f"{show.release_date.year}-{month}-{day}"
        }
        return render(request, 'tv_shows/edit.html', contents)


def delete(request, id):
    show = Show.objects.get(id=id)
    show.delete()
    return redirect('/')
