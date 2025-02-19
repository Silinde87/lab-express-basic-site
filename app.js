const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => response.sendFile(__dirname + '/views/home.html'));
app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works.html'));
app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/gallery', (request, response) => response.sendFile(__dirname + '/views/gallery.html'));

app.get('*', (request, response) => response.sendFile(__dirname + '/views/404.html', 404));



// Server started
app.listen(3000, () => console.log('Listening on port 3000'));