import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity({ name: 'CLIENTEMOVIL' })
export class ClienteEntity {
  @PrimaryColumn({ name: 'IDCLI', nullable: false })
  id: number;

  @Column({ name: 'NOMCLIE', nullable: false })
  Nombre: string;
  @Column({ name: 'APEPATCLIE', nullable: false })
  ApellidoPaterno: string;
  @Column({ name: 'APEMATCLIE', nullable: false })
  ApellidoMaterno: string;
  @Column({ name: 'DOCCLIE', nullable: false })
  DNI: string;
  @Column({ name: 'EMACLIE', nullable: false })
  Email: string;
  @Column({ name: 'CELCLIE', nullable: false })
  Celular: number;
  @Column({ name: 'CONCLIE', nullable: false })
  Contrasena: string;
  @Column({ name: 'ESTCLIE', nullable: false })
  Estado: string;
  @Column({ name: 'ROL', nullable: false })
  Rol: string;
}
