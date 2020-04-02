// Dependencies
const express = require('express');
const compression = require('compression');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//To parse the JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Routes
app.use(compression());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
