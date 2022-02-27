"""

@see https://github.com/Ukrainianconflict-live/website
"""
from flask import Flask, render_template, request, redirect
from markupsafe import escape

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')
