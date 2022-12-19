import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RepuestoEntity } from '../entities/repuesto.entity';
import { RepuestoService } from '../services/repuesto.service';

@Controller('repuestos')
export class RepuestoController {
  constructor(private repuestoServices: RepuestoService) {}

  @Post()
  async register(@Body() repuesto: RepuestoEntity): Promise<RepuestoEntity> {
    return this.repuestoServices.register(repuesto);
  }

  @Put()
  async update(@Body() repuesto: RepuestoEntity): Promise<RepuestoEntity> {
    return this.repuestoServices.update(repuesto);
  }

  @Get()
  async findAll(): Promise<RepuestoEntity[]> {
    return this.repuestoServices.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.repuestoServices.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.repuestoServices.delete(id);
  }
}
