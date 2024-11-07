
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/user', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'user.html'));
});

app.get('/products', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

app.get('/products/above3', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'productsAbove3.html'));
});


app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
});
