import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VentaService } from '../services/venta.service';
import { VentaEntity } from '../entities/venta.entity';

@Controller('ventas')
export class VentaController {
  constructor(private ventaService: VentaService) {}

  @Post()
  async register(@Body() venta: VentaEntity): Promise<VentaEntity> {
    return this.ventaService.register(venta);
  }

  @Put()
  async update(@Body() venta: VentaEntity): Promise<VentaEntity> {
    return this.ventaService.update(venta);
  }

  @Get()
  async findAll(): Promise<VentaEntity[]> {
    return this.ventaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.ventaService.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.ventaService.delete(id);
  }
}
