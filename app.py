from flask import Flask
from flask import Response, jsonify, render_template
import json
import pandas as pd

app = Flask(__name__, static_url_path="", static_folder="./", template_folder='.') # . is current directory

data_url = "https://raw.githubusercontent.com/jazzzchan/data_vis_project/master/crimezip%20(1).csv"

data = pd.read_csv(data_url)

with app.open_resource('mapchart.json', 'r') as f: # read the json file as dict
    chart = json.load(f)

@app.route('/vis/<year>/<offense>')
def visualize(year, offense):
    chart['layer'][1]['data']['url'] = '/data/{}/{}'.format(year, offense)
    return jsonify(chart)

@app.route('/data/year/<year>')
@app.route('/data/offense/<offense>')
@app.route('/data/<year>/<offense>')
def get_data(year=None, offense=None):

    filtered = data
    if year:
        filtered = filtered[data.OccurenceYear == year]
    if offense:
        filtered = filtered[data.Offense == offense]
    return jsonify(filtered.to_dict(orient='records'))


@app.route('/')
def index():
    return render_template('index.j2', years=data.OccurenceYear.unique().tolist(), offenses=data.Offense.unique().tolist())


if __name__ == '__main__':
    app.run(port=8800, debug=True)
