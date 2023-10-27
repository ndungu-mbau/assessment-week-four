import express from 'express'
import { PORT } from './config'

const app = express()

app.get('/', (req, res) => res.json({
  message: 'Hello world from my API'
}))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
