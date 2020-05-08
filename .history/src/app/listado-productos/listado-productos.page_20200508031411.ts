import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto.models';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.page.html',
  styleUrls: ['./listado-productos.page.scss'],
})
export class ListadoProductosPage implements OnInit {

  productos: Producto[];
  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.verProductos().subscribe((productos)=>{
      this.productos = productos;
      console.log(productos)
    },(errorObtenido)=>{
      console.log(errorObtenido)
    })
  }

  irADetalle(producto: Producto){
    
  }

}
