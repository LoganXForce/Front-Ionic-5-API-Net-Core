import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto } from '../models/producto.models';
import { Proveedor } from '../../../.history/src/app/models/proveedor.models_20200508063902';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) { }

  verProductos() : Observable<Producto[]>{
    return this.http.get<Producto[]>("https://localhost:44328/api/Producto/obtener");
  }
  porProductoID(productoID: number) : Observable<Producto>{
    return this.http.get<Producto>("https://localhost:44328/api/Producto/PorProductoID/" + productoID);
  }

  eliminarProducto(productoID: number): Observable<boolean>{
    return this.http.delete<boolean>("https://localhost:44328/api/Producto/eliminar/" + productoID);
  }

  ListadoDeProveedores(): Observable<Proveedor[]>{
    return this.http.get<boolean>("https://localhost:44328/api/Producto/eliminar/" + productoID);
  }
}
