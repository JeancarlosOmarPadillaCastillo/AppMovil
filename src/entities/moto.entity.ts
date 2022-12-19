import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'MOTOS' })
export class MotoEntity {
  @PrimaryColumn({ name: 'IDMOT', nullable: false })
  id: number;
  @Column({ name: 'CATMOT', nullable: false })
  categoria: string;
  @Column({ name: 'MARMOT', nullable: false })
  marca: string;
  @Column({ name: 'MODMOT', nullable: false })
  modelo: string;
  @Column({ name: 'COLMOT', nullable: false })
  color: string;
  @Column({ name: 'PRECOMMOT', nullable: false })
  precioCompra: number;
  @Column({ name: 'PREVENMOT', nullable: false })
  precioVenta: number;
  @Column({ name: 'GARMOT', nullable: false })
  garantia: string;
  @Column({ name: 'STOCK', nullable: false })
  STOCK: number;
  @Column({ name: 'ESTMOT', nullable: false })
  estado: string;
  @Column({ name: 'FOTO' })
  foto: string;
  @Column({ name: 'DESMOT' })
  descripcion: string;
}
