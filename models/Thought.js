const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactionSchema');
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minlength: 1,
      maxlength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //getter method to format the timestamp on query
      get: createdAtVal => createdAtVal.toLocaleDateString()
    },
    username: {
      type: String,
      require: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

thoughtSchema.virtual("friendCount").get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
