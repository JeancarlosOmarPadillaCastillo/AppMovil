import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepuestoEntity } from '../entities/repuesto.entity';

@Injectable()
export class RepuestoService {
  constructor(
    @InjectRepository(RepuestoEntity)
    private repuestoRepository: Repository<RepuestoEntity>,
  ) {}
  register(repuesto: RepuestoEntity) {
    return this.repuestoRepository.save(repuesto);
  }
  update(repuesto: RepuestoEntity) {
    return this.repuestoRepository.save(repuesto);
  }

  findAll() {
    return this.repuestoRepository.find();
  }
  delete(id: number) {
    return this.repuestoRepository.delete(id);
  }
  findById(id: number) {
    return this.repuestoRepository.findBy({ id });
  }
}
