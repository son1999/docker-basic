const express = require('express');
const res = require('express/lib/response');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => 
    res.json(
        process.env.MESSAGE 
        ? `${process.env.MESSAGE}` 
        : 'hello'
    )
);

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));