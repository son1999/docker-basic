FROM node:slim
WORKDIR /usr/src/app
ENV MESSAGE="Hello Son"
COPY package.json .
COPY yarn.lock .
RUN yarn install 
COPY . .
EXPOSE 4000
CMD [ "yarn", "start" ]