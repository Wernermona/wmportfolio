const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./db/connect')

const projects = require('./routes/project')

const port = process.env.port || 5000
const app = express()

app.use(cors())

app.use('/api/v1/projects', projects)


// Demarage du server

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()