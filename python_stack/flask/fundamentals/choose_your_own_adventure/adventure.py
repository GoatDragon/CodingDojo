from flask import Flask, render_template


app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html", phrase="hello", times=5)   # notice the 2 new named arguments!

@app.route('/p1')
def p1():
    return render_template("p1.html")

@app.route('/p2')
def p2():
    return render_template("p2.html")

@app.route('/p3')
def p3():
    return render_template("p3.html")

@app.route('/p4')
def p4():
    return render_template("p4.html")

@app.route('/p5')
def p5():
    return render_template("p5.html")

@app.route('/p6')
def p6():
    return render_template("p6.html")
    
@app.route('/p7')
def p7():
    return render_template("p7.html")


if __name__=="__main__":
    app.run(debug=True)

