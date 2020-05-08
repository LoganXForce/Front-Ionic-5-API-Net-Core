import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto } from '../../../.history/src/app/models/producto.models_20200508063952';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) { }

  verProductos() : Observable<Producto>{
    return this.http.get<Producto>("https://localhost:44328/api/Producto/obtener");
  }
}
