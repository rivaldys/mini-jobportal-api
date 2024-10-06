const { Router } = require('express')
const authValidator = require('../../middlewares/validators/Auth')
const Auth = require('../../controller/Auth')

const router = Router()

router.post('/login', authValidator.login, Auth.login)

module.exports = router