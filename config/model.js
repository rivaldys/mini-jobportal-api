const { Model } = require('objection')
const database = require('./database')

Model.knex(database)

module.exports = Model