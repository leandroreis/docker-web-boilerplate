# Use an official Python runtime as a parent image
FROM python:3.6

# Vim
RUN apt-get update && apt-get install -y vim

ENV FLASK_APP=app.py
ENV FLASK_ENV=development

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY requirements.txt /usr/src/app
RUN pip install --no-cache-dir --trusted-host pypi.python.org -r requirements.txt

EXPOSE 4000

CMD [ "flask", "run", "--host=0.0.0.0", "--port=4000"]