import { CepService } from '../services/CepService'

describe('CepService', () => {
  let cepService: CepService

  beforeAll(() => {
    cepService = new CepService()
  })

  it('should return address information for a valid CEP', async () => {
    let cep = '47430000'
    const address = await cepService.getAddressByCep(cep)

    expect(address).toBeDefined()
    expect(address.cep.replace("-","")).toEqual(cep)
    expect(address.logradouro).toBeDefined()
    expect(address.bairro).toBeDefined()
    expect(address.localidade).toBeDefined()
    expect(address.uf).toBeDefined()
  })

  it('should return an error true for an invalid CEP', async () => {
    const cep = '00000000'
    const error = {"erro":"true"}

    await expect(cepService.getAddressByCep(cep)).resolves.toEqual(error)
  })

  it('should throw an error for an invalid CEP', async () => {
    const cep = 'aaaaaaaa'

    await expect(cepService.getAddressByCep(cep)).rejects.toThrowError()
  })
})