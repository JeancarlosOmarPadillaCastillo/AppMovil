import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './Controllers/cliente.controller';
import { ClienteService } from './services/cliente.service';
import { ClienteEntity } from './entities/cliente.entity';
import { MotoController } from './Controllers/moto.controller';
import { MotoEntity } from './entities/moto.entity';
import { MotoService } from './services/moto.service';
import { RepuestoEntity } from './entities/repuesto.entity';
import { RepuestoController } from './Controllers/repuesto.controller';
import { RepuestoService } from './services/repuesto.service';
import { AuthController } from './Controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { EmpleadoController } from './Controllers/empleado.controller';
import { EmpleadoEntity } from './entities/empleado.entity';
import { EmpleadoService } from './services/empleado.service';
import { VentaEntity } from './entities/venta.entity';
import { VentaController } from './Controllers/venta.controller';
import { VentaService } from './services/venta.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'TiendaMotos',
      password: '1234',
      sid: 'xe',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      ClienteEntity,
      MotoEntity,
      RepuestoEntity,
      EmpleadoEntity,
      VentaEntity,
    ]),
  ],
  controllers: [
    AppController,
    ClienteController,
    MotoController,
    RepuestoController,
    AuthController,
    EmpleadoController,
    VentaController,
  ],
  providers: [
    AppService,
    ClienteService,
    MotoService,
    RepuestoService,
    AuthService,
    EmpleadoService,
    VentaService,
  ],
})
export class AppModule {}
