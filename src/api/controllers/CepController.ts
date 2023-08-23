import { Request, Response } from 'express'
const CepSearsh = require('../../dis/CepSearch')


export class CepController {
  private search: CepSearsh

  constructor() {
    this.search = new CepSearsh()
    
  }

  public getCep = async (req: Request, res: Response): Promise<void> => {
    try {
      const cep = req.params.cep 
      const address = this.search.CepQuickSearch(cep)
      
      res.status(200).json(address) 
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter o endereço.' })
    }
  }
}