import { Proveedor } from '../../../.history/src/app/models/proveedor.models_20200508063902';
export interface Producto{

    productoID: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    
    codigoEntrada: string;
    proveedorID: number;
    fechaEntrada: Date;
    proveedor: Proveedor;
}