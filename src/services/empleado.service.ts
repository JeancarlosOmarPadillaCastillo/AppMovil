import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoEntity } from '../entities/empleado.entity';
@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private empleadoRepository: Repository<EmpleadoEntity>,
  ) {}
  register(empleado: EmpleadoEntity) {
    return this.empleadoRepository.save(empleado);
  }
  update(empleado: EmpleadoEntity) {
    return this.empleadoRepository.save(empleado);
  }

  findAll() {
    return this.empleadoRepository.find();
  }
  delete(id: number) {
    return this.empleadoRepository.delete(id);
  }
  findById(id: number) {
    return this.empleadoRepository.findBy({ id });
  }
}
