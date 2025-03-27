const router = require('express').Router()
const authRoutes = require('./auth.cjs')

router.use('/auth', authRoutes)


module.export = router