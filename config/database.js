require('dotenv').config()
const knex = require('knex')
const knexfile = require('./knexfile')

const config = process.env.NODE_ENV === 'production' ? knexfile.production : knexfile.development 
const database = knex(config)

module.exports = database