const User = require('../../models/User')

const getAccount = async (conditions) =>
{
    const getUserAccount = await User.query()
        .where(conditions)
        .first()

    return getUserAccount
}

module.exports = getAccount