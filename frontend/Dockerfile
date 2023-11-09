FROM caddy:2.4.0
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx expo export
RUN mv dist /var/www
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]