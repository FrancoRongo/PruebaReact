import { Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToOne } from "typeorm";
import { Cliente } from "./Cliente";
import { Producto} from "./Producto";

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  Compra_Id: number;

  @Column()
  Fecha: Date;

  @Column()
  Hora: string;

  @OneToMany(() => Producto, producto => producto.compra)
  productos: Producto[];

  @ManyToOne(() => Cliente, cliente => cliente.compras)
  cliente: Cliente;

  @Column("decimal", { precision: 10, scale: 2 })
  Total: number;
}

