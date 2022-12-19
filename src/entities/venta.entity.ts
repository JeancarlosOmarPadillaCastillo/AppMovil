import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'VENTAMOVIL' })
export class VentaEntity {
  @PrimaryColumn({ name: 'IDVEN', nullable: false })
  id: number;
  @Column({ name: 'FOTVEN', nullable: false })
  foto: string;
  @Column({ name: 'DESVEN', nullable: false })
  descripcion: string;
  @Column({ name: 'CANVEN', nullable: false })
  cantidad: number;
}
