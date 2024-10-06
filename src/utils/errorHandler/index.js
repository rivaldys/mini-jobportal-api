const errorHandler = ({ statusCode, statusText, message, data, errors }, req, res, next) =>
{
    return res.status(statusCode)
        .json({ statusCode, statusText, message, data, errors })
        .end()
}

module.exports = errorHandler