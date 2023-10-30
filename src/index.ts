import express from 'express'

import { router as notesRouter} from './controllers'

import { PORT } from './config'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.json({
  message: 'Hello world from my API'
}))

app.use('/notes', notesRouter)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
