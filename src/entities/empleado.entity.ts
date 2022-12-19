import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity({ name: 'EMPLEADO' })
export class EmpleadoEntity {
  @PrimaryColumn({ name: 'IDEMP', nullable: false })
  id: number;

  @Column({ name: 'NOMEMP', nullable: false })
  Nombre: string;
  @Column({ name: 'APEEMP', nullable: false })
  Apellidos: string;
  @Column({ name: 'DOCEMP', nullable: false })
  DNI: string;
  @Column({ name: 'EMAILEMP', nullable: false })
  Email: string;
  @Column({ name: 'CELEMP', nullable: false })
  Celular: number;
  @Column({ name: 'FEHCREGEMP', nullable: false })
  FechaRegistro: string;
  @Column({ name: 'USUEMP', nullable: false })
  Usuario: string;
  @Column({ name: 'PASEMP', nullable: false })
  Contrasena: string;
  @Column({ name: 'ESTEMP', nullable: false })
  Estado: string;
}
