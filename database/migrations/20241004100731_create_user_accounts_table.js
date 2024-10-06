exports.up = function(knex)
{
    return knex.schema.createTable('tbl_user_accounts', function(table)
    {
        table.specificType('uuid', 'CHAR(36)').primary()
        table.string('username', 20).unique().notNullable()
        table.string('fullname', 50).notNullable()
        table.string('email', 50).unique().notNullable()
        table.string('password').notNullable()
        table.string('photo', 50)
        table.string('account_type', 10)
        table.timestamps(true, true)
    })
}

exports.down = function(knex)
{
    return knex.schema.dropTable('tbl_user_accounts')
}