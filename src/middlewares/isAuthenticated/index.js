const jwt = require('jsonwebtoken')

const isAuthenticated = (req, res, next) =>
{
    const authHeader = req.headers.authorization

    if(!authHeader)
    {
        return res.status(401).json({
            statusCode: 401,
            statusText: 'Unauthorized',
            message: 'Authorization token is required.'
        })
    }

    const token = authHeader.split(' ')[1]

    try
    {
        const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN)
        req.user = decoded
        next()
    }
    catch(err)
    {
        return res.status(403).json({
            statusCode: 403,
            statusText: 'Forbidden',
            message: 'Invalid token.'
        })
    }
}

module.exports = isAuthenticated
