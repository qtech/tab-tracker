const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes'));

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server Started on port ${config.port}`);
});
