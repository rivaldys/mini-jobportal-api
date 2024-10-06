require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const { serve } = require('./utils')

const app = express()

app.use(bodyParser.json())
app.use(
    cors({
        origin: ['http://localhost:3005'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
)
app.options('*', cors())
app.use('/', routes)

serve(app)
