import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MotoService } from '../services/moto.service';
import { MotoEntity } from '../entities/moto.entity';

@Controller('motos')
export class MotoController {
  constructor(private motoServices: MotoService) {}

  @Post()
  async register(@Body() moto: MotoEntity): Promise<MotoEntity> {
    return this.motoServices.register(moto);
  }

  @Put()
  async update(@Body() moto: MotoEntity): Promise<MotoEntity> {
    return this.motoServices.update(moto);
  }

  @Get()
  async findAll(): Promise<MotoEntity[]> {
    return this.motoServices.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.motoServices.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.motoServices.delete(id);
  }
}
