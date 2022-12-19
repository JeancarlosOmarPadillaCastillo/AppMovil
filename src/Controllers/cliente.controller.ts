import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { ClienteEntity } from '../entities/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private clienteServices: ClienteService) {}

  @Post()
  async register(@Body() cliente: ClienteEntity): Promise<ClienteEntity> {
    return this.clienteServices.register(cliente);
  }

  @Put()
  async update(@Body() cliente: ClienteEntity): Promise<ClienteEntity> {
    return this.clienteServices.update(cliente);
  }

  @Get()
  async findAll(): Promise<ClienteEntity[]> {
    return this.clienteServices.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.clienteServices.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.clienteServices.delete(id);
  }
}
