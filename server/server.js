require('dotenv').config()

const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/payment')

const app = express()

//Parse JSON requests
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT,() => {
    console.log(`app is listening on ${process.env.PORT}`)
})

app.use('/api/v1/payment', paymentRoutes);