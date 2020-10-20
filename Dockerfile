FROM node:12
WORKDIR /nodesamp
COPY package.json /nodesamp
RUN npm install
COPY . /nodesamp
CMD node nodesamp.js
EXPOSE 8081
