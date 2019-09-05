from flask import Flask, render_template
app = Flask(__name__)


@app.route('/<phrase>/<times>')
def index(phrase, times):
    return render_template("index.html", phrase=phrase, times=int(times))   # notice the 2 new named arguments!


if __name__ == "__main__":
    app.run(debug=True)
