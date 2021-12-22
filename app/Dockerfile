FROM node:17-alpine as build-step

# RUN apk add bash && \
#     apk add vim && \
#     apk add curl

WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install

# EXPOSE 3000

CMD ["npm", "run", "dev"]
# CMD ["tail","-f", "/dev/null"]

# FROM nginx:1.21.4
# RUN apt-get update && apt-get install vim -y

# COPY ./app/default.conf  /etc/nginx/conf.d/default.conf

# EXPOSE 3000:80