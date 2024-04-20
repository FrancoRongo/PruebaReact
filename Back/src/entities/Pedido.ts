import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Proveedor } from "./Proveedor";
import { Producto } from "./Producto";

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  Pedido_Id: number;

  @OneToOne(() => Proveedor)
  @JoinColumn()
  proveedor: Proveedor;

  @OneToOne(() => Producto)
  @JoinColumn()
  producto: Producto;

  @Column()
  Fecha: Date;

  @Column()
  Hora: string;

  @Column()
  Cantidad_Pedido: number;

  @Column("decimal", { precision: 10, scale: 2 })
  Total: number;
}
