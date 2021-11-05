from flask import Flask, render_template
app = Flask('app')


@app.route('/')
def index():
  return render_template("index.html")


@app.route('/')
def arsti():
  return render_template("arsti.html")
 
 
@app.route('/')
def kontakti():
  return render_template("kontakti.html")

@app.route('/')
def doktorati():
  return render_template("doktoratiunpoliklinikas.html")

app.run(host='0.0.0.0', port=8080)