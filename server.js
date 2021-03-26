const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/ENIAC-Shop'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/ENIAC-Shop/index.html'));
});

app.listen(process.env.PORT || 8080);