const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const routes = require('./routes/routes')

const app = express()

app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:8080' }))
app.use(express.static(path.join(__dirname, '../public')))
// app.use('/data/2.5/forecast', routes)

module.exports = app