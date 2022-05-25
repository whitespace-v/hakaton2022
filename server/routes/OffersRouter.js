const Router = require('express')
const router = new Router()
const OffersController = require('../controllers/OffersController')

router.post('/', OffersController.create)  //create car
router.get('/', OffersController.getAll)        //get all cars
router.delete('/:id', OffersController.delete)
module.exports = router