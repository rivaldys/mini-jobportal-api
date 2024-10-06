// Importing modules
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

// Importing utils/helpers
const { getAccount } = require('../../../utils')

const login = async (req, res, next) =>
{
    try
    {
        const errors = validationResult(req)

        if(!errors.isEmpty())
        {
            const error = new Error('Input error.')
            error.errors = errors.mapped()
            throw error
        }

        const account = await getAccount({ username: req.body.username })
        
        const payload = {
            uuid: account.uuid,
            username: account.username
        }

        const generateToken = jwt.sign(
            payload,
            process.env.SECRET_KEY_ACCESS_TOKEN,
            {
                expiresIn: '3d'
            })

        return res.status(200)
            .json({
                statusCode: 200,
                statusText: 'OK',
                message: 'Log in successful.',
                token: generateToken,
                loggedInUser:
                {
                    fullname: account.fullname,
                    photo: account.photo,
                    account_type: account.account_type.name
                }
            })
    }
    catch(error)
    {
        console.log(error)
        next(error)
    }
}

module.exports = login