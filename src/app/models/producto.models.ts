import { Proveedor } from './proveedor.models';

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
            this.productoID = datos.productoID;
            this.nombre = datos.nombre;
            this.descripcion = datos.descripcion;
            this.cantidad = datos.cantidad;
            this.precio = datos.precio;
            this.codigoEntrada = datos.codigoEntrada;
            this.proveedorID = datos.proveedorID;
            this.fechaEntrada = datos.fechaEntrada;
            this.proveedor = datos.proveedor;
            return
        }
        this.productoID = this.productoID;
        this.nombre = this.nombre;
        this.descripcion = this.descripcion;
        this.cantidad = this.cantidad;
        this.precio = this.precio;
        this.codigoEntrada = this.codigoEntrada;
        this.proveedorID = this.proveedorID;
        this.fechaEntrada = this.fechaEntrada;
        this.proveedor = this.proveedor;    
    }
}