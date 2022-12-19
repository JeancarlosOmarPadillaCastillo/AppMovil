import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'REPUESTOS' })
export class RepuestoEntity {
  @PrimaryColumn({ name: 'IDREP', nullable: false })
  id: number;
  @Column({ name: 'NOMREP', nullable: false })
  nombre: string;
  @Column({ name: 'MARREP', nullable: false })
  marca: string;
  @Column({ name: 'MODREP', nullable: false })
  modelo: string;
  @Column({ name: 'PRECOMREP', nullable: false })
  precioCompra: number;
  @Column({ name: 'PREVENREP', nullable: false })
  precioVenta: number;
  @Column({ name: 'STOCK', nullable: false })
  STOCK: number;
  @Column({ name: 'ESTREP', nullable: false })
  estado: string;
  @Column({ name: 'FOTO', nullable: false })
  foto: string;
}
