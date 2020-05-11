import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../.history/src/app/services/productos.service_20200511065725';
import { Proveedor } from '../../../.history/src/app/models/proveedor.models_20200508063902';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  proveedores: Proveedor[] = new Array<Proveedor>();
  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.ListadoDeProveedores
  }

}
