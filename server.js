const express = require('express');
const connectDB = require('./config/db.js');
const http = require('http');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Innit Middleware
app.use(express.json({ extended: false }));
app.use(cors({
    origin: "*"
}))

app.get('/', (req, res) => {
    res.send(`<h1>Yo<h1/>`)
})

// Define Routes
app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
app.use('/api/posts', require('./routes/api/posts.js'));

app.listen(PORT, () => {
    console.log(`Server max http size is ${http.maxHeaderSize}`);
    console.log(`Server running on port http://localhost:${PORT}`);
});