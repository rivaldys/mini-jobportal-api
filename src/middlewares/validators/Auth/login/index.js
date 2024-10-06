const bcrypt = require('bcryptjs')
const { body } = require('express-validator')
const { getAccount } = require('../../../../utils')

const login = [
    body('username')
        .not().isEmpty().withMessage('Username is required.')
        .custom(async (username, { req }) =>
        {
            const account = await getAccount({ username })
            if(!account) return Promise.reject('Incorrect username or password.')
        }),
    body('password')
        .not().isEmpty().withMessage('Password is required.')
        .custom(async (password, { req }) =>
        {
            const account = await getAccount({ username: req.body.username })

            if(account && 'password' in account)
            {
                const { password: accountPassword } = account
                const comparePassword = await bcrypt.compare(password, accountPassword)
                if (!comparePassword) return Promise.reject('Incorrect username or password.')
            }
            else
            {
                return Promise.reject('Incorrect username or password.')
            }
        })
]

module.exports = login