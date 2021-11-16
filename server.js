const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`<h1>Yo<h1/>`)
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});