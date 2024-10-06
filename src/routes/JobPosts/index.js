const { Router } = require('express')
const JobPosts = require('../../controller/JobPosts')
const isAuthenticated = require('../../middlewares/isAuthenticated')

const router = Router()

router.get('/', isAuthenticated, JobPosts.list)
router.get('/list', isAuthenticated, JobPosts.list)
router.get('/detail/:id', isAuthenticated, JobPosts.detail)

module.exports = router