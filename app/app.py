from datetime import datetime
from flask import Flask, render_template
app = Flask(__name__)


def get_experience():
    total_experience = datetime.strptime('2016-06-12', '%Y-%m-%d')
    work_start_date = datetime.strptime('2020-08-05', '%Y-%m-%d')
    work_experience = (datetime.utcnow() - work_start_date).days / 365
    total_experience = (datetime.utcnow() - total_experience).days / 365
    return total_experience, work_experience


@app.route('/')
def return_website():
    total_experience, work_experience = get_experience()
    return render_template('index.html', work_experience="{:.1f}".format(work_experience),
                           total_experience="{:.1f}".format(total_experience))


@app.route('/dolly')
def dolly_zoom_demo():
    return '<h2>Work in progress, check back later</h2>'
