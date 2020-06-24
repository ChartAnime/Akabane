FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --no-bin-links --link-duplicates
RUN yarn run types:prepare

COPY build .

ENV PORT 8080

CMD ["yarn", "run", "docker:start"]
