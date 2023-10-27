import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const { PORT = 3000 } = process.env

const app = express()

app.get('/', (req, res) => res.json({
  message: 'Hello world from my API'
}))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
