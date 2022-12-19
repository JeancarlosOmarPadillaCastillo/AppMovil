import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmpleadoService } from '../services/empleado.service';
import { EmpleadoEntity } from '../entities/empleado.entity';

@Controller('empleados')
export class EmpleadoController {
  constructor(private empleadoServices: EmpleadoService) {}

  @Post()
  async register(@Body() empleado: EmpleadoEntity): Promise<EmpleadoEntity> {
    return this.empleadoServices.register(empleado);
  }

  @Put()
  async update(@Body() empleado: EmpleadoEntity): Promise<EmpleadoEntity> {
    return this.empleadoServices.update(empleado);
  }

  @Get()
  async findAll(): Promise<EmpleadoEntity[]> {
    return this.empleadoServices.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.empleadoServices.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.empleadoServices.delete(id);
  }
}
