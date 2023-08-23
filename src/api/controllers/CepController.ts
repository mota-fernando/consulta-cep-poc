import { Request, Response } from 'express'
import { CepService } from '../../services/CepService'
import { MessagePublisher } from '../../helpers/MessagePublisher';

export class CepController {
  private cepService: CepService
  private messagePublisher: MessagePublisher

  constructor() {
    this.cepService = new CepService()
    this.messagePublisher = new MessagePublisher('cep_queue')
  }

  public getCep = async (req: Request, res: Response): Promise<void> => {
    try {
      const cep = req.params.cep 
      const address = await this.cepService.getAddressByCep(cep) 

      this.messagePublisher.connect().then(() => this.messagePublisher.publishMessage(address)).finally(() => this.messagePublisher.disconnect());

      res.status(200).json(address) 
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter o endereço.' })
    }
  }
}