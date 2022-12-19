import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from '../entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}
  findByUser(DNI: string, Contrasena: string) {
    return this.clienteRepository.find({
      where: {
        DNI: DNI,
        Contrasena: Contrasena,
      },
    });
  }
}
