from flask import Flask, render_template, redirect, request, session
from random import randint
from datetime import datetime
app = Flask(__name__)
app.secret_key = 'wolololololo'


gold_values = {
    'farm': [-10, 20],
    'cave': [-5, 100],
    'house': [-1, 5],
    'casino': [-50, 50]
}


@app.route('/')
def index():
    if 'gold' not in session:
        session['gold'] = 0
    if 'log' not in session:
        session['log'] = []
    return render_template('index.html')


@app.route('/process_gold', methods=['post'])
def gold():
    building = request.form['building']
    a = gold_values[building][0]
    b = gold_values[building][1]
    gains = randint(a, b)
    if gains > 0:
        color = 'green'
    elif gains == 0:
        color = 'white'
    else:
        color = 'red'
    session['gold'] += gains
    session['log'].insert(0, [color, f"{building} earned you {gains} gold at {datetime.now()}"])
    print(session['log'])
    return redirect('/')


@app.route('/reset', methods=['post'])
def reset():
    session.clear()
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
