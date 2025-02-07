const express = require('express');
const routerApi = require('./routes/');

const app = express();
const port = 3500;

//Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en expres');
});

app.listen(port, () => {
  console.log('mi port  backEnd GamaroServer ' + port);
});

routerApi(app);
