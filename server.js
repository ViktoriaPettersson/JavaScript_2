//Hämtar app, mongoose, dotenv
const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config()

//Hämtar miljövariabel från .env
const PORT = process.env.PORT || 9999;
const mongoURI = process.env.MONGO_URI

// Sparar URL i en variabel
const serverURI = 'http://localhost:' + PORT

// Lyssnar på port
app.listen(PORT, () => console.log('Server running at:' + serverURI))

//Ansluter till databasen
mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to database'))
