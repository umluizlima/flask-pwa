# Flask PWA
> A progressive webapp template.

Flask PWA is supposed to be a goto template when I start a new Flask project. It is constructed on a Model-Template-Controller perspective, which I find clear enough for my current projects.

You can check a live version at [Heroku](https://flask-pwa.herokuapp.com).

## Requirements
- [Python 3.10.0](https://realpython.com/intro-to-pyenv/)

## Features

* Blueprint oriented, Flask 1.0 project
* Instantly deployable on Heroku
* Off-the-shelf progressive web app behaviour
* Service worker based on Workbox

## Installation

```shell
> git clone https://github.com/umluizlima/flask-pwa
> cd flask-pwa
> make environment
> make install
```

## Usage

Due to the current Service Worker [specification](https://w3c.github.io/ServiceWorker/#secure-context), the web browser will only allow its registration if the application is served over **https, or on localhost** for development purposes.

This makes **nGrok** useful for testing the PWA functionality, as it allows you to expose localhost over the internet with **https** included.

### localhost

```shell
> make run
```

### nGrok

```shell
> make flask run
> ngrok http 80
```

## Deployment

### Heroku

The `app.json`, `Procfile`, and `runtime.txt` files on this repository are specific for deployment on [Heroku](https://www.heroku.com). It can be done by clicking the following button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Links

- Repository: https://github.com/umluizlima/flask-pwa
- Issue tracker: https://github.com/umluizlima/flask-pwa/issues
- Inspiration and references:
  - [Google's Seu Primeiro PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=pt-br)
  - [Flask PWA demo](https://github.com/uwi-info3180/flask-pwa)
  - [Google's Workbox](https://developers.google.com/web/tools/workbox/)

## Licensing

This project is licensed under MIT license.
