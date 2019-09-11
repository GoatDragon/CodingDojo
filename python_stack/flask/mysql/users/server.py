from flask import Flask, render_template, request, redirect, flash
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
app.secret_key = "password"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


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
    data = {
        "f": request.form["firstname"],
        "l": request.form["lastname"],
        "e": request.form["email"]
    }
    query = "SELECT * FROM users WHERE email=%(e)s"
    db = connectToMySQL('users_project')
    email_unique = db.query_db(query, data)
    valid = True
    if len(request.form["firstname"]) < 3:
        valid = False
        flash("first name too short")
    if len(request.form["lastname"]) < 3:
        valid = False
        flash("last name too short")
    if not EMAIL_REGEX.match(request.form["email"]):
        valid = False
        flash("invalid email")
    if len(email_unique) > 0:
        valid = False
        flash("email already in use")
    if not valid:
        return redirect('/users/new')
    query = "INSERT INTO users(first_name, last_name, email, created_at, updated_at) VALUES(%(f)s, %(l)s, %(e)s, NOW(), NOW())"
    db = connectToMySQL('users_project')
    the_user = db.query_db(query, data)
    flash("User Added Successfully")
    return redirect('/users/show/' + str(the_user))


@app.route('/users/edit/<userid>')
def edit_user(userid):
    db = connectToMySQL('users_project')
    query = "SELECT * FROM users WHERE id=%(id)s"
    data = {"id": userid}
    the_user = db.query_db(query, data)
    return render_template('edit_user.html', user=the_user)


@app.route('/users/edit/<userid>/confirm', methods=["POST"])
def confirm_edit(userid):
    data = {
        "id": userid,
        "f": request.form["firstname"],
        "l": request.form["lastname"],
        "e": request.form["email"]
    }
    query = "SELECT * FROM users WHERE email=%(e)s AND NOT id=%(id)s"
    db = connectToMySQL('users_project')
    email_unique = db.query_db(query, data)
    valid = True
    if len(request.form["firstname"]) < 3:
        valid = False
        flash("first name too short")
    if len(request.form["lastname"]) < 3:
        valid = False
        flash("last name too short")
    if not EMAIL_REGEX.match(request.form["email"]):
        valid = False
        flash("invalid email address")
    if len(email_unique) > 0:
        valid = False
        flash("email already in use")
    if not valid:
        return redirect('/users/edit/' + str(userid))
    db = connectToMySQL('users_project')
    query = "UPDATE users SET first_name=%(f)s, last_name=%(l)s, email=%(e)s, updated_at=NOW() WHERE id=%(id)s"
    db.query_db(query, data)
    print("the USER", data["id"])
    flash("User Updated Successfully")
    return redirect('/users/show/' + data["id"])


@app.route('/users/show/<userid>/')
def show_user(userid):
    db = connectToMySQL('users_project')
    query = "SELECT * FROM users WHERE id=%(id)s"
    data = {"id": userid}
    the_user = db.query_db(query, data)
    return render_template('show_user.html', user=the_user)


@app.route('/users/delete/<userid>')
def delete_user(userid):
    db = connectToMySQL('users_project')
    query = "DELETE FROM users WHERE id=%(id)s"
    data = {"id": userid}
    db.query_db(query, data)
    flash(f"User {userid} Deleted")
    return redirect('/users/')


if __name__ == '__main__':
    app.run(debug=True)
