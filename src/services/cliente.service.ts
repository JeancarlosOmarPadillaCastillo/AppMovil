import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from '../entities/cliente.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}
  register(cliente: ClienteEntity) {
    return this.clienteRepository.save(cliente);
  }
  update(cliente: ClienteEntity) {
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }
  delete(id: number) {
    return this.clienteRepository.delete(id);
  }
  findById(id: number) {
    return this.clienteRepository.findBy({ id });
  }
}
