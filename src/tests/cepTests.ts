import { CepService } from '../services/CepService';

describe('CepService', () => {
  let cepService: CepService;

  beforeAll(() => {
    // Configurações necessárias antes dos testes
    cepService = new CepService();
  });

  it('should return address information for a valid CEP', async () => {
    const cep = '47430000';
    const address = await cepService.getAddressByCep(cep);

    expect(address).toBeDefined();
    expect(address.cep).toEqual(cep);
    expect(address.logradouro).toBeDefined();
    expect(address.bairro).toBeDefined();
    expect(address.cidade).toBeDefined();
    expect(address.estado).toBeDefined();
  });

  it('should throw an error for an invalid CEP', async () => {
    const cep = '00000000';

    await expect(cepService.getAddressByCep(cep)).rejects.toThrowError();
  });
});