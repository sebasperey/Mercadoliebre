const express =  require('express');
const path = require('path');

const app = express ();

app.use( express.static(path.resolve(__dirname, './public')) );

app.listen(process.env.PORT || 3001, () => console.log('"Servidor corriendo en http://localhost:3030"'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})