const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.disable('x-porwered-by');
app.set('port', port);

/* START SERVER WITH LOCAL IP */
server.listen(3000, '192.168.100.19' || 'localhost', function() {
    console.log('NodeJS ' + port );
});

/* SAMPLE GET REQUEST */
app.get('/', (req, res)=>{
    res.send('Ruta principal de backend');
});

/* SAMPLE POST REQUEST */
app.post('/test', (req, res) => {
    res.send('Peticion post pa');
});

/* ERROR HANDLER */
app.use((err, req, res, next) => {
    console.log('Error', err);
    res.status(err.status || 500).send(err.stack);
});