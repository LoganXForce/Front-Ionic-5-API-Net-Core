import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(http: HttpClient) { }

  verProductos() : Observable<any>{

  }
}
