import { Proveedor } from '../../../.history/src/app/models/proveedor.models_20200508063902';
export interface Producto{

    productoID: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    precio: number;
    codigoEntrada: string;
    proveedorID: number;
    fechaEntrada: Date;
    proveedor: Proveedor;
}

export class Producto{
    productoID: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    precio: number;
    codigoEntrada: string;
    proveedorID: number;
    fechaEntrada: Date;
    proveedor: Proveedor;

    constructor(datos?: Producto){
        if(datos != null){
            this.productoID = 
        }
    }
}