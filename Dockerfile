FROM node:alpine

ENV HTTP_PORT=3000

COPY . .

EXPOSE ${HTTP_PORT}

CMD [ "npm", "start" ]
