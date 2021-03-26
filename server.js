const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/MercadoLibre'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/MercadoLibre/index.html'));
});

app.listen(process.env.PORT || 8080);