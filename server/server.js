const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        earnings: 6237449.78,
        expenses: 2321452.73,
        marketingBudget: 1000000,
        marketingExpenses: 123587.82,
        q1: 250000,
        q2: 150000,
        q3: 350000,
        q4: 450000,
    })
});

app.listen(3005, () => { console.log('server started on port 3005') });