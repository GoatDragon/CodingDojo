from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
app = Flask(__name__)


@app.route('/')
def index():
    mysql = connectToMySQL('pets')
    pets = mysql.query_db('SELECT * FROM pets;')
    return render_template('index.html', all_pets=pets)


@app.route("/create_pet", methods=["POST"])
def add_pet_to_db():
    mysql = connectToMySQL('pets')
    query = "INSERT INTO pets (name, type, created_at, updated_at) VALUES (%(n)s, %(t)s, NOW(), NOW());"
    data = {
        "n": request.form["name"],
        "t": request.form["type"],
    }
    new_pet_id = mysql.query_db(query, data)
    return redirect('/')


@app.route('/delete', methods=["POST"])
def delete_pet():
    mysql = connectToMySQL('pets')
    query = f"DELETE FROM pets WHERE id = %(f_id)s"
    data = {
        "f_id": request.form["id"]
    }
    deleted_pet = mysql.query_db(query, data)
    print(deleted_pet)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
