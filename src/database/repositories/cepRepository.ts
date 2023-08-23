import { EntityRepository, Repository } from 'typeorm';
import { CepEntity } from '../entities/cepEntity';

@EntityRepository(CepEntity)
export class CepRepository extends Repository<CepEntity> {
  public async findByCep(cep: string): Promise<CepEntity | undefined> {
    return this.findOne({ cep });
  }
  findOne(arg0: { cep: string; }): CepEntity | PromiseLike<CepEntity | undefined> | undefined {
    throw new Error('Method not implemented.');
  }

  public async saveCep(cepData: CepEntity): Promise<CepEntity> {
    return this.save(cepData);
  }
}