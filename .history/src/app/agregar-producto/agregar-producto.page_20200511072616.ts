import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../.history/src/app/services/productos.service_20200511065725';
import { Proveedor } from '../../../.history/src/app/models/proveedor.models_20200508063902';
import { Producto } from '../models/producto.models';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  proveedores: Proveedor[] = new Array<Proveedor>();
  producto: Producto = new Producto(); 

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.ListadoDeProveedores().subscribe((listadoProveedores) => {
      this.proveedores = (listadoProveedores);
      console.log(listadoProveedores);
    })
  }

}
