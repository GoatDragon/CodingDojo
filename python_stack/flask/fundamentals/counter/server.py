from flask import Flask, session, render_template, redirect, request
app = Flask(__name__)
app.secret_key = 'toaster'


@app.route('/')
def home():
    if 'real_counter' in session:
        session['real_counter'] += 1
    else:
        session['real_counter'] = 1
    if 'visit_counter' in session:
        session['visit_counter'] += 1
    else:
        session['visit_counter'] = 1
    return render_template('index.html')


@app.route('/destroy')
def destroy():
    session.pop('visit_counter')
    return redirect('/')


@app.route('/add_two')
def add_two():
    session['visit_counter'] += 1
    return redirect('/')


@app.route('/add_num', methods=['POST'])
def add_num():
    try:
        session['visit_counter'] += int(request.form['num'])
        return redirect('/')
    except ValueError:
        return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
