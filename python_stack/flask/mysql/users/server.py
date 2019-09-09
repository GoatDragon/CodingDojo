from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
app = Flask(__name__)


@app.route('/')
def go_home():
    return redirect('/users/')

@app.route('/users/')
def all_users():
    db = connectToMySQL('users_project')
    users = db.query_db('SELECT * FROM users')
    return render_template('index.html', all_users=users)


@app.route('/users/new/')
def new_user():
    return render_template('new_user.html')


@app.route('/users/add/', methods=["POST"])
def add_user():
    db = connectToMySQL('users_project')
    query = "INSERT INTO users(first_name, last_name, email, created_at, updated_at) VALUES(%(f)s, %(l)s, %(e)s, NOW(), NOW())"
    data = {
        "f": request.form["firstname"],
        "l": request.form["lastname"],
        "e": request.form["email"]
    }
    the_user = db.query_db(query, data)
    return redirect('/users/show/'+str(the_user))


@app.route('/users/edit/<userid>')
def edit_user(userid):
    db = connectToMySQL('users_project')
    query = "SELECT * FROM users WHERE id=%(id)s"
    data = {
        "id": userid
    }
    the_user = db.query_db(query, data)
    return render_template('edit_user.html', user=the_user)

@app.route('/users/edit/<userid>/confirm', methods=["POST"])
def confirm_edit(userid):
    db = connectToMySQL('users_project')
    query = "UPDATE users SET first_name=%(f)s, last_name=%(l)s, email=%(e)s, updated_at=NOW() WHERE id=%(id)s"
    data = {
        "id": userid,
        "f": request.form["firstname"],
        "l": request.form["lastname"],
        "e": request.form["email"]
    }
    the_user = db.query_db(query, data)
    return redirect ('/')


@app.route('/users/show/<userid>/')
def show_user(userid):
    db = connectToMySQL('users_project')
    query = "SELECT * FROM users WHERE id=%(id)s"
    data = {
        "id": userid
    }
    the_user = db.query_db(query, data)
    return render_template('show_user.html', user=the_user)


@app.route('/users/delete/<userid>')
def delete_user(userid):
    db = connectToMySQL('users_project')
    query = "DELETE FROM users WHERE id=%(id)s"
    data = {
        "id": userid
    }
    the_user = db.query_db(query, data)
    return redirect('/users/')


if __name__ == '__main__':
    app.run(debug=True)
