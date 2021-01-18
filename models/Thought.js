const { Schema, model, Types } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        unique: true,
        required: 'You need to provide a username!',
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ReactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
)

// friend count
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

// create the Thought model
const Thought = model('Thought', ThoughtSchema)

module.exports = Thought