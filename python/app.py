from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    msg = 'Flask Dockerized!'
    print(msg)
    return msg


if __name__ == '__main__':
    app.run()
