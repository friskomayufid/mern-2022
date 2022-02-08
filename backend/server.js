const express = require('express')
const router = require('./routes/goalRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`)
})
