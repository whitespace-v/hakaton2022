const Router = require('express')
const router = new Router()
const NewsController = require('../controllers/NewsController')

router.post('/', NewsController.create)
router.get('/', NewsController.getAll)
module.exports = router