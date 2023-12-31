const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const client = require('./connection')

dotenv.config()

const userRouter = require('./routes/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/user', userRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  console.error(err.message, err.stack)
  res.status(statusCode).json({ message: err.message })
  return
})

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`)

  try {
    const { rows } = await client.query('SELECT * FROM users')

    console.log('All users:', rows)
  } catch (error) {
    console.error('Error fetching all users:', error)
  }
})
