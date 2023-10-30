import { Router } from 'express'
import { controllers } from '../services'

const router = Router()

router.get('/', controllers.findAll)
router.get('/:id', controllers.findOne)
router.post('/', controllers.insertOne)

export {
  router
}
