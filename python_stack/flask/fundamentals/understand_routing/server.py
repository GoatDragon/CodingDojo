from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello there.'


@app.route('/dojo')
def dojo():
    return 'Hello dojo.'


@app.route('/say/<name>')
def say(name):
        return f'Hello {str(name)}!'


@app.route('/repeat/<num>/<word>')
def repeat(num, word):
    return (str(word) + " ") * int(num)


@app.route('/<path:path>')
def catch_all(path):
    return "Sorry! No response. Try again."


if __name__ == "__main__":
    app.run(debug=True)
