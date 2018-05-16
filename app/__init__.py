import os
from flask import Flask


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY=os.environ.get('SECRET_KEY') or 'you-will-never-guess',
        # SQLALCHEMY_DATABASE_URI=os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(app.instance_path, 'app.db'),
        # SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )

    try:
        os.makedirs(app.instance_path)
        os.makedirs(os.path.join(app.instance_path, 'vcf'))
    except OSError:
        pass

    # from app.model import db, migrate
    # db.init_app(app)
    # migrate.init_app(app, db)

    from app.controller import main, pwa
    app.register_blueprint(main.bp)
    app.register_blueprint(pwa.bp)

    return app
