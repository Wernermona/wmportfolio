const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
