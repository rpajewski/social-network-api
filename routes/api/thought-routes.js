const router = require('express').Router()

const {} = require('../../controllers/thought-controller')

router
    .route('/:userId')
    .get()
    .post()

router
    .route('/:userId/:thoughtId')
    .get()
    .put()
    .delete()

router
    .route('/:thoughtId/reactions')
    .post()
    .delete()

module.exports = router