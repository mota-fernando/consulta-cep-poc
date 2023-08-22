import { Router } from 'express'
import { CepController } from '../controllers/CepController'

export const cepRoutes = Router()
const cepController = new CepController()

cepRoutes.get('/cep/:cep', cepController.getCep)