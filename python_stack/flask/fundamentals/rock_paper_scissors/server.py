from flask import Flask, render_template, request
import random
app = Flask(__name__)

moves = {0: 'rock', 1: 'paper', 2: 'scissors'}
outcomes = {"0,0": "tied", "0,1": "lose", "0,2": "won", "1,0": "won", "1,1": "tied", "1,2": "lose", "2,0": "lose", "2,1": "won", "2,2": "tied"}


def play_rps(user_move, cpu_move):
    return outcomes[f"{user_move},{cpu_move}"]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/choice', methods=['POST'])
def choice():
    cpu_move = random.randint(0, 2)
    user_move = request.form["choice"]
    return render_template('result.html', result=play_rps(user_move, cpu_move), comp_move=moves[cpu_move], your_move=moves[int(user_move)])


if __name__ == "__main__":
    app.run(debug=True)
