const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hallo aku express!');
})

app.listen(port, () => console.log(`App Listen on port ${port}`))