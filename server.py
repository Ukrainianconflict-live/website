from flask import Flask, render_template, request, redirect
from markupsafe import escape

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html')
