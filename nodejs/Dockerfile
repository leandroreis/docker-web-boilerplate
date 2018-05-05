FROM node:carbon

# Vim
RUN apt-get update && apt-get install -y vim

# Nodemon for development
RUN npm i -g nodemon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD [ "nodemon", "-V", "-L", "/usr/src/app" ]