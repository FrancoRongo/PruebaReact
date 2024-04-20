import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Producto} from "./Producto"

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  Proveedor_Id: number;

  @Column()
  Nombre: string;

  @Column()
  Direccion: string;

  @Column()
  Telefono: string;

  @Column()
  Email: string;

  @OneToMany(() => Producto, producto => producto.proveedor)
  productos: Producto[];
}