from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', rows=8, columns=8)


@app.route('/<rows>/')
def rows(rows):
    return render_template('index.html', rows=int(rows), columns=8)


@app.route('/<rows>/<columns>/')
def rows_columns(rows, columns):
        return render_template('index.html', rows=int(rows), columns=int(columns))


@app.route('/<rows>/<columns>/<c0>/<c1>')
def colors(rows, columns, c0, c1):
        return render_template('index.html', rows=int(rows), columns=int(columns), c0=c0, c1=c1)


if __name__ == "__main__":
    app.run(debug=True)
