exports.seed = function(knex)
{
    // Deletes all existing entries
    return knex('tbl_user_accounts').del().then(function()
    {
        // Data
        data =
        [
            {
                uuid: '6cad46ed-7480-4baa-bddf-9a80de4e4e68',
                username: 'user',
                fullname: 'User',
                email: 'user@email.com',
                password: '$2a$10$lsY6IZM.jh5NCPBJUwUsI.hdGYao1ah79103o1r1yO44ly4P/GxaG',
                account_type: 'User'
            }
        ]

        // Insert seed entries
        return knex('tbl_user_accounts').insert(data)
    })
}