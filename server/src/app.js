const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use('/api', require('./controllers'));

app.listen(process.env.PORT || 8081);
