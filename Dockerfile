# base image
# node:16-alpine lets us use npm and node.JS
FROM node:16-alpine

# -p flag allows us to create a subdirectories
RUN mkdir -p /usr/app/

# store source code in newly created working directory
WORKDIR /usr/app

# copy project's directory into docker image's working directory (/usr/app)
COPY ./ ./

# image will install dependencies then create build
RUN npm install
RUN npm run build

# the port that this container will listen on
EXPOSE 3000

# define entrypoint instruction
CMD [ "npm", "start" ]