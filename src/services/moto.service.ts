import { Injectable } from '@nestjs/common';
import { MotoEntity } from '../entities/moto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MotoService {
  constructor(
    @InjectRepository(MotoEntity)
    private motoRepository: Repository<MotoEntity>,
  ) {}
  register(moto: MotoEntity) {
    return this.motoRepository.save(moto);
  }
  update(moto: MotoEntity) {
    return this.motoRepository.save(moto);
  }

  findAll() {
    return this.motoRepository.find();
  }
  delete(id: number) {
    return this.motoRepository.delete(id);
  }
  findById(id: number) {
    return this.motoRepository.findBy({ id });
  }
}
