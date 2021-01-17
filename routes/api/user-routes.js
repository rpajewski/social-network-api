const router = require('express').Router()

const {} = require('../../controllers/user-controller')

router
    .route('/')
    .get()
    .post()

router
    .route('/:id')
    .get()
    .put()
    .delete()

router
    .route('/:userId/friends/:friendId')
    .post()
    .delete()

module.exports = router