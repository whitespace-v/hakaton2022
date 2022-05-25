const router = require('express').Router()  //create router from express

//import under-routers
const offersRouter = require('./OffersRouter')
const newsRouter = require('./NewsRouter')

//under-routers
router.use('/news', newsRouter)
router.use('/offers', offersRouter)

module.exports = router //export router