from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/results', methods=['post'])
def create_user():
    name_from = request.form['name']
    location_from = request.form['location']
    language_from = request.form['language']
    comments_from = request.form['comments']
    return render_template("show.html", name_on=name_from, location_on=location_from, language_on=language_from, comments_on=comments_from)


if __name__ == "__main__":
    app.run(debug=True)
