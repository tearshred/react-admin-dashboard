const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3005;
const dbName = process.env.DB_NAME;
const mongoose = require('mongoose');
const { errorHandler } = require('./middleware/errorMiddleware');
const { ledgerController } = require('./controllers/ledgerController')

mongoose.connect(`mongodb://localhost/${dbName}`, () => {

    // Reading the mongoose connection state
    let connectionStatus = mongoose.connection.readyState;

    // Displaying status based on the returned value
    switch (connectionStatus) {
        case 0: console.log('Database Disconnected - Status Code ' + connectionStatus);
            break;
        case 1: console.log('Database Connected - Status Code ' + connectionStatus);
            break;
        case 2: console.log('Database Connecting - Status Code ' + connectionStatus);
            break;
        case 3: console.log('Database Disconnecting - Status Code' + connectionStatus);
            break;
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use('/api/ledger', require('./routes/ledgerRoutes'));

app.get('/api/test', (req, res) => {
    res.json({ message: 'test' })
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3005');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.listen(port, () => { console.log(`Server started on port ${port}`) });