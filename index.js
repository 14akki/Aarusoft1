const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

const UserRouter = require('./Route/UserRoute')
const loginRoute = require('./Route/loginRoute')
const { validateJWT } = require('./Middleware/verifyJWT')


app.use(express.json());

// Trigger 
app.get('/', function (req, res) {
    res.send('Welcome to Aarusoft');
});

app.use('/user', UserRouter);
app.use('/auth', loginRoute)


// Database
const databaseUrl = process.env.DATABASE_URL;
const dbName = "Aarusoft";
mongoose.connect(databaseUrl, {});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error'));
db.once('open', () => {
    console.log(`Connection to MongoDB:${dbName}`);
});



const PortNo = process.env.PORTNO;
app.listen(PortNo, () => {
    console.log(`Server Started at Port No:${PortNo}`)

});