from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
app = Flask(__name__)


@app.route('/')
def index():
    mysql = connectToMySQL('first_flask')           # call the function, passing in the name of our db
    friends = mysql.query_db('SELECT * FROM friends;')  # call the query_db function, pass in the query as a string
    return render_template('index.html', all_friends=friends)


@app.route("/create_friend", methods=["POST"])
def add_friend_to_db():
    mysql = connectToMySQL('first_flask')
    query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(occup)s, NOW(), NOW());"
    data = {
        "fn": request.form["fname"],  # QUERY: INSERT INTO first_flask (first_name, last_name, occupation, created_at, updated_at)
        "ln": request.form["lname"],  # VALUES (fname from form, lname from form, occupation from form, NOW(), NOW());
        "occup": request.form["occ"]
    }
    new_friend_id = mysql.query_db(query, data)
    print(new_friend_id)
    return redirect('/')


@app.route('/delete', methods=["POST"])
def delete_friend():
    mysql = connectToMySQL('first_flask')
    query = f"DELETE FROM friends WHERE id = %(f_id)s"
    data = {
        "f_id": request.form["id"]
    }
    deleted_friend = mysql.query_db(query, data)
    print(deleted_friend)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
