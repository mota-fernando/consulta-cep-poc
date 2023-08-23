const redis = require('redis');
import { CepService } from '../services/CepService'
import { MessagePublisher } from '../helpers/MessagePublisher';

class CepSearch {
    private redisClient
    private cepService: CepService
    private messagePublisher: MessagePublisher

    constructor() {
        this.redisClient = redis.createClient()
        this.cepService = new CepService()
        this.messagePublisher = new MessagePublisher('cep_queue')
    }

    CepQuickSearch(cep) {
        this.redisClient.get(cep, (err, result) => {
            if (err) {
                console.error('Erro ao consultar o CEP no Redis:', err)
                return
            }

            if (result) {
                console.log('Resultado do CEP encontrado no Redis:', result)
                return result
            } else {
                const resultadoConsulta = this.CepQuickSearchExternal(cep)
                this.redisClient.setex(cep, 3600, resultadoConsulta)
                console.log('Resultado do CEP encontrado externamente:', resultadoConsulta)
            }
        })
    }

    async CepQuickSearchExternal(cep) {
        const address = await this.cepService.getAddressByCep(cep)

        await this.messagePublisher.connect().then(() => this.messagePublisher.publishMessage(address)).finally(() => this.messagePublisher.disconnect());
        console.log(`Endereço do CEP ${cep}`)
        return address
    }
}  