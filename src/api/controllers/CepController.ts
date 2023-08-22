import { Request, Response } from 'express'
import { CepService } from '../../services/cepService'

export class CepController {
  private cepService: CepService

  constructor() {
    this.cepService = new CepService()
  }

  public getCep = async (req: Request, res: Response): Promise<void> => {
    try {
      const cep = req.params.cep 
      const address = await this.cepService.getAddressByCep(cep) 

      res.status(200).json(address) 
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter o endereço.' })
    }
  }
}