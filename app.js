const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'audio')));
app.use(express.static(path.join(__dirname, 'files')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'libs')));
app.use(express.static(path.join(__dirname, 'style')));
app.use(express.static(path.join(__dirname, 'video')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/files/index.html')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/files/login.html')
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/files/about.html')
});

app.get('/account', (req, res) => {
    res.sendFile(__dirname + '/files/account.html')
});

app.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/files/cart.html')
});

app.get('/catalog', (req, res) => {
    res.sendFile(__dirname + '/files/catalog.html')
});

app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/files/contacts.html')
});

app.get('/delivery', (req, res) => {
    res.sendFile(__dirname + '/files/delivery.html')
});

app.get('/payment', (req, res) => {
    res.sendFile(__dirname + '/files/payment.html')
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/files/search.html')
});

app.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
})

