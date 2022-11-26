const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3005;
const { errorHandler } = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(errorHandler);

app.use('/api/ledger', require('./routes/ledgerRoutes'));



app.get('/api/test', (req, res) => {
    res.json({ message: 'test'})
});

app.listen(port, () => { console.log(`Server started on port ${port}`) });