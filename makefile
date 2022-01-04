.PHONY: environment
environment:
	pyenv install -s 3.10.0
	pyenv uninstall --force flask-pwa
	pyenv virtualenv 3.10.0 --force flask-pwa
	pyenv local flask-pwa

.PHONY: install
install:
	pip freeze | xargs -r pip uninstall -y && \
	pip install -r requirements.txt

.PHONY: run
run:
	export FLASK_ENV=development && flask run
