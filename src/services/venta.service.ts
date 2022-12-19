import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentaEntity } from '../entities/venta.entity';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(VentaEntity)
    private ventaRepository: Repository<VentaEntity>,
  ) {}
  register(venta: VentaEntity) {
    return this.ventaRepository.save(venta);
  }
  update(venta: VentaEntity) {
    return this.ventaRepository.save(venta);
  }

  findAll() {
    return this.ventaRepository.find();
  }
  delete(id: number) {
    return this.ventaRepository.delete(id);
  }
  findById(id: number) {
    return this.ventaRepository.findBy({ id });
  }
}
