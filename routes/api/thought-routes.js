const router = require('express').Router()

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction } = require('../../controllers/thought-controller')

router
    .route('/:userId')
    .get(getAllThoughts)
    .post(addThought)

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction)

module.exports = router