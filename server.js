const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');

// EXPRESS
const app = express();

PORT = process.env.PORT || 4000;

// MONGO DATABASE
require('./database.js');

app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/', require('./routes/RENAME_ME'))

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
