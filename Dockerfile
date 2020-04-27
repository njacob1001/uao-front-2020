
FROM node:lts

WORKDIR /usr/src/app

# COPY packages/web/public ./public
COPY server.js ./

RUN mkdir public
RUN npm init -y
RUN npm install --save express compression

EXPOSE 8080

CMD [ "npm", "start" ]
