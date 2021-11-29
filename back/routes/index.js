const router = require('express').Router()
const auth = require('./auth')
// const categories = require('./')
const operations = require('./operations')
  

router.use('/auth', auth)
// router.use('/categories', categories)
router.use('/operations', operations)
  
// a /orders se accede a través de /users/:id/orders
 


module.exports = router