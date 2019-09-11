from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re
app = Flask(__name__)
app.secret_key = "password"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
bcrypt = Bcrypt(app)


@app.route('/')
def go_home():
    return render_template('index.html')


@app.route('/register', methods=["POST"])
def add_user():
    data = {"em": request.form["email"]}
    query = "SELECT * FROM users WHERE email=%(em)s"
    db = connectToMySQL('login_registration')
    email_unique = db.query_db(query, data)
    data = {"un": request.form["username"]}
    query = "SELECT * FROM users WHERE username=%(un)s"
    db = connectToMySQL('login_registration')
    username_unique = db.query_db(query, data)
    valid = True
    if request.form["password"] != request.form["confirm_password"]:
        valid = False
        flash("passwords don't match")
    if len(request.form["password"]) < 4:
        valid = False
        flash("password must be at least 4 characters")
    if len(request.form["username"]) < 2:
        valid = False
        flash("username must be at least 2 characters")
    if not EMAIL_REGEX.match(request.form["email"]):
        valid = False
        flash("invalid email")
    if len(email_unique) > 0:
        valid = False
        flash("email already registered")
    if len(username_unique) > 0:
        valid = False
        flash("username taken")
    if not valid:
        return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        "un": request.form["username"],
        "em": request.form["email"],
        "ph": pw_hash
    }
    query = "INSERT INTO users(username, email, pass_hash, created_at, updated_at) VALUES(%(un)s, %(em)s, %(ph)s, NOW(), NOW())"
    db = connectToMySQL('login_registration')
    db.query_db(query, data)
    flash("registration successful")
    return redirect('/')


@app.route('/login', methods=["POST"])
def edit_user():
    db = connectToMySQL('login_registration')
    query = "SELECT * FROM users WHERE username=%(un)s"
    data = {"un": request.form["username"]}
    result = db.query_db(query, data)
    if len(result) > 0 and bcrypt.check_password_hash(result[0]['pass_hash'], request.form['password']):
            session['userid'], session['username'] = result[0]['id'], result[0]['username']
            return redirect('/success')
    flash("login unsuccessful")
    return redirect('/')


@app.route('/success')
def success():
    if 'userid' in session:
        return render_template('login.html')
    else:
        return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
