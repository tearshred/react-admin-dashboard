const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({ 'users': ['userOne', 'userTwo', 'userThree', 'userFour'] })
});

app.listen(3005, () => {console.log('server started on port 3005')});