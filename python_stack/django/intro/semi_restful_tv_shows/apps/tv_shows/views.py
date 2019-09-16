from django.shortcuts import render, redirect
from .models import Show


def index(request):
    contents = {
        'shows': Show.objects.all()
    }
    return render(request, 'tv_shows/index.html', contents)


def add(request):
    if request.method == "GET":
        return render(request, 'tv_shows/add.html')
    if request.method == "POST":
        tit = request.POST['title']
        net = request.POST['network']
        r_d = request.POST['release_date']
        des = request.POST['description']
        show = Show.objects.create(title=tit, network=net, release_date=r_d, description=des)
        return redirect('/show/' + str(show.id))


def show(request, id):
    contents = {
        "show": Show.objects.get(id=id)
    }
    return render(request, 'tv_shows/show.html', contents)


def edit(request, id):
    show = Show.objects.get(id=id)
    if request.method == "GET":
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
    if request.method == "POST":
        show.title = request.POST['title']
        show.network = request.POST['network']
        show.release_date = request.POST['release_date']
        show.description = request.POST['description']
        show.save()
        return redirect('/show/' + str(show.id))


def delete(request, id):
    show = Show.objects.get(id=id)
    show.delete()
    return redirect('/')
