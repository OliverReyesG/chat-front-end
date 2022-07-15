FROM node:16.16.0

WORKDIR /client

COPY package.json /client/package.json

RUN yarn

COPY . /client

CMD ["yarn", "dev", "--host"]