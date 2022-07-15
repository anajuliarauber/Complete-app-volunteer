const express = require('express');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index');
const cors = require('cors')

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', indexRoutes);

const mongoURL = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(mongoURL)
.then(()=> {
    console.log("conectado ao banco de dados");
    app.listen(port);
})
.catch((err) => console.log(err))


