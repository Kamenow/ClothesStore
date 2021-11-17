const express = require('express');
const connectDB = require('./config/db.js')

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.get('/', (req, res) => {
    res.send(`<h1>Yo<h1/>`)
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});