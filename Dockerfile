
# Stage 1: Build the Angular application
# FROM node:14-alpine as build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build
FROM node:18.19

WORKDIR /kt-admin
COPY . /kt-admin

RUN npm config set legacy-peer-deps true
RUN npm install -g @angular/cli
RUN npm install 
RUN npm i @types/ws@8.5.4
CMD ["ng", "serve", "--host", "0.0.0.0"]
