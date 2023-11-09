FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx expo export --platform web
FROM caddy:2.4.0
COPY --from=builder /app/dist /var/www
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80