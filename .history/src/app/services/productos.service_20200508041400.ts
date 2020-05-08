import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) { }

  verProductos() : Observable<Producto[]>{
    return this.http.get<Producto[]>("https://localhost:44328/api/Producto/obtener");
  }
  porProductos(ProductoID: number) : Observable<Producto[]>{
    return this.http.get<Producto[]>("https://localhost:44328/api/Producto/obtener" + ProductoID);
  }

  eliminarProducto(productoID: number):Observable<boolean>
  {
    
  }
}
