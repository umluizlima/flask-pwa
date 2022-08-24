from flask import (
    Blueprint, render_template
)

bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    return render_template('main/index.html',
                           title='Joy & Seb will marry')


@bp.route('/get_paraphrase', methods=['post'])
def get_paraphrase():
    try:
        str_response = [1,2,3]
        return app.response_class(response=json.dumps(str_response), status=200, mimetype='application/json')
    except Exception as error:
        err = str(error)
        print(err)
        return app.response_class(response=json.dumps(err), status=500, mimetype='application/json')
