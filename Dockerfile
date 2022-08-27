FROM node:12

WORKDIR /app

COPY ./searcher_frontend .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
