const mongoose = require('mongoose')

const projectsShema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, 'must provide an image'],
    },

    title: {
      type: String,
      required: [true, 'must provide a title'],
      unique: true,
    },

    description: {
      type: String,
      required: [true, 'must provide a description'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Project', projectsShema)