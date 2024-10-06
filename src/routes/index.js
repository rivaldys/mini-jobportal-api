const { Router } = require('express')
const Auth = require('./Auth')
const JobPosts = require('./JobPosts')

const router = Router()

router.get('/', (req, res) =>
{
    return res.json({
        message: 'Welcome to GitHub Jobs API'
    })
})

router.use('/auth', Auth)
router.use('/job-posts', JobPosts)

module.exports = router