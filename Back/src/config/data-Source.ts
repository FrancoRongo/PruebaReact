import {DataSource} from "typeorm";

export const AppDataSource = new DataSource ({
    type:"postgres",
    host:"localhost",
    port: 5432,
    username: "postgres",
    password:"nazca3636",
    database:"tienda",
    //dropSchema:true,//borra el contenido de la tabla de base de datos.
    synchronize: true,
    logging:false,
    entities: [],
    subscribers: [],
})   
