const express = require('express');
const router = require('./routes/products');
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', router);

const server = app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);
server.on('error', () => console.log(`Error: ${err}`));
