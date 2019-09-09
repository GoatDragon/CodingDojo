from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
app = Flask(__name__)


@app.route('/')
def index():
    mysql = connectToMySQL('world')           # call the function, passing in the name of our db
    languages = mysql.query_db('SELECT * FROM languages;')  # call the query_db function, pass in the query as a string
    print(languages)
    return str(languages)

if __name__ == "__main__":
    app.run(debug=True)
