from flask import Flask, render_template, redirect
app = Flask(__name__)


@app.route('/')
def go_here():
    return redirect('/play')


@app.route('/play/')
def index():
    return render_template("index.html", num=3, color='#2341D7')


@app.route('/play/<x>/')
def number(x):
    return render_template("index.html", num=int(x), color='#2341D7')


@app.route('/play/<x>/<color>/')
def color(x, color):
    return render_template("index.html", num=int(x), color=color)

if __name__ == "__main__":
    app.run(debug=True)
