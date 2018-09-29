const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

let counter = 0;

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json())

app.get('/api/counter', (req, res)=> {
    res.send({counter})
})
app.patch('/api/increase', (req, res) => {
    console.log('again')
    const {number} = req.body;
    counter += number;
    res.send({counter});
})

app.patch('/api/decrease', (req, res) => {
    const {number} = req.body;
    counter -= number;
    res.send({counter});
})

app.listen(4000, () => console.log('listening on port 4000'))