import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Compra} from "./Compra"


@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  Cliente_Id: number;

  @Column()
  Nombre: string;

  @Column()
  Direccion: string;

  @Column()
  Telefono: string;

  @Column()
  Email: string;

  @OneToMany(() => Compra, compra => compra.cliente)
  compras: Compra[];
}