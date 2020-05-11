import { Component, OnInit } from '@angular/core';


import { Producto } from '../models/producto.models';
import { Proveedor } from '../models/proveedor.models';
import { ProductosService } from '../services/productos.service';

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
