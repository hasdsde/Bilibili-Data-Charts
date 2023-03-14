import json

from flask import Flask, render_template
from flask_cors import CORS

# app = Flask(__name__, template_folder='templates', static_folder='static' )
app = Flask(__name__, static_url_path='', static_folder='static', static_host=None, host_matching=False,
            subdomain_matching=False, template_folder='templates', instance_path=None, instance_relative_config=False,
            root_path=None)
CORS(app, resources=r'/*')


def get_json(path):
    return json.load(open(path, 'r', encoding='utf-8'))


@app.route('/', methods=['GET'])
def hello_world():  # put application's code here
    try:
        return render_template('index.html')
    except:
        return ''


@app.route('/api/bili_bangumi_list', methods=['GET'])
def bili_bangumi_list():
    try:
        data = get_json('./data/bili_bangumi_list.json')
        # 将数据传递给模板
        return data
    except:
        return ''


@app.route('/api/bili_bangumi_sort', methods=['GET'])
def bili_bangumi_sort():
    try:
        data = get_json('./data/bili_bangumi_sort.json')
        # 将数据传递给模板
        return data
    except:
        return ''


@app.route('/api/bili_bangumi_area', methods=['GET'])
def bili_bangumi_area():
    try:
        data = get_json('./data/bili_bangumi_area.json')
        # 将数据传递给模板
        return data
    except:
        return ''


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=6688)
