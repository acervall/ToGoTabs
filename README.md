## Clone URL:

https://github.com/acervall/ToGoTabs.git

## IP-address server

http://172.201.167.242/

## Återställ ursprungligdata i databasen

1. Kopiera originalfilen till tmp mappen.
   `docker compose cp ./init.sql database:/tmp/`

2. Kör den nya sql filen
   `docker compose exec -it database psql -U postgres --dbname postgres -f /tmp/init.sql`
