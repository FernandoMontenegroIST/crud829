const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const transaccionesRouter = require('./routes/plux_transacciones_billeteras');
const { sequelize } = require('./models');

sequelize.sync();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/transacciones', transaccionesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
