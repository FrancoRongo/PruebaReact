import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Proveedor } from "./Proveedor";
import { Compra } from "./Compra";

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  Producto_Id: number;

  @Column()
  Nombre: string;

  @Column()
  Descripcion: string;

  @ManyToOne(() => Proveedor, proveedor => proveedor.productos)
  proveedor: Proveedor;

  @Column()
  Marca: string;

  @Column()
  Modelo: string;

  @Column()
  Cantidad_Stock: number;

  @Column("decimal", { precision: 10, scale: 2 })
  Precio_Venta: number;

  @Column("decimal", { precision: 10, scale: 2 })
  Precio_Compra: number;
  
  @ManyToOne(() => Compra, compra => compra.productos)
  compra: Compra;
}

