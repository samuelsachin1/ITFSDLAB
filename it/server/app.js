const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const url = 'mongodb+srv://samuelsachin71:Sam@miniproject.hdp0yxn.mongodb.net/itlab?retryWrites=true&w=majority'
const alienrouter = require('./routes/aliens')
app.use(express.json())
app.use(cors())
mongoose.connect(url)

const con = mongoose.connection
con.on('open',()=>{
    console.log('connected to mongodb')
})
app.use('/aliens',alienrouter)
app.listen(9000,()=>{
    console.log('connected to server')
})