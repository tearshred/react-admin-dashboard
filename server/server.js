const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        earnings: 6237449.78,
        expenses: 2633823.17,
        marketingBudget: 1000000,
        marketingExpenses: 123587.82
    })
});

app.listen(3005, () => { console.log('server started on port 3005') });