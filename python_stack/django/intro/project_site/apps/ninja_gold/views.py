from django.shortcuts import render, redirect
from random import randint
from datetime import datetime


gold_values = {
    'farm': [-10, 20],
    'cave': [-5, 100],
    'house': [-1, 5],
    'casino': [-100, 50]
}


def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'log' not in request.session:
        request.session['log'] = []
    return render(request, 'ninja_gold/index.html')


def gold(request):
    building = request.POST['building']
    a = gold_values[building][0]
    b = gold_values[building][1]
    gains = randint(a, b)
    if gains > 0:
        color = 'green'
    elif gains == 0:
        color = 'white'
    else:
        color = 'red'
    request.session['gold'] += gains
    request.session['log'].insert(0, [color, f"{building} earned you {gains} gold at {datetime.now()}"])
    print(request.session['log'])
    return redirect('/ninja')


def reset(request):
    request.session.clear()
    return redirect('/ninja')
