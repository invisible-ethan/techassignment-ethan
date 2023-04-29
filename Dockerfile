FROM node:14-alpine AS builder

EXPOSE 8000

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .