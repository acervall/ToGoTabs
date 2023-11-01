const express = require('express'),
  path = require('path');

const app = express();
port = process.env.PORT || 3000;
url = 'http://localhost:';

app.get('/', (_request, response) => {
  response.send({ hello: 'World' });
});

app.use(express.static(path.join(path.resolve(), public)));

app.listen(port, (err) => {
  if (err) console.log('Error in server setup');
  console.log(`Server listening on port ${url}${port}`);
});
