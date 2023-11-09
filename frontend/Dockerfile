FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx expo export --platform web

FROM nginx as production-stage
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/ .
WORKDIR /etc/nginx/conf.d
COPY ./nginx/default.conf .
EXPOSE 80