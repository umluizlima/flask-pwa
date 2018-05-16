from flask import (
    Blueprint, send_from_directory
)

bp = Blueprint('pwa', __name__)


@bp.route('/sw.js')
def sw():
    return send_from_directory('static/js', 'sw.js')
