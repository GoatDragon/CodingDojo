from flask import Flask, render_template, request, redirect, session
from random import randint
app = Flask(__name__)
app.secret_key = 'totally a secret'


moves = {0: 'rock', 1: 'paper', 2: 'scissors'}
outcomes = {"0,0": "tied", "0,1": "lose", "0,2": "won", "1,0": "won", "1,1": "tied", "1,2": "lose", "2,0": "lose", "2,1": "won", "2,2": "tied"}


def play_rps(user_move, cpu_move):
    return outcomes[f"{user_move},{cpu_move}"]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/choice', methods=['POST'])
def choice():
    session["cpu"] = randint(0, 2)
    session["user"] = request.form["choice"]
    return redirect('/result')


@app.route('/result')
def result():
    if "cpu" in session.keys() and "user" in session.keys():
        return render_template('result.html', result=play_rps(session["user"], session["cpu"]), comp_move=moves[session["cpu"]], your_move=moves[int(session["user"])])
    else:
        return redirect('/')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
