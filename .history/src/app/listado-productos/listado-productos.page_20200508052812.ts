import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.page.html',
  styleUrls: ['./listado-productos.page.scss'],
})
export class ListadoProductosPage implements OnInit {

  productos: Producto[];
  constructor(private productoServicio: ProductosService, private router: Router) { }

  ngOnInit() {
    this.productoServicio.verProductos().subscribe((productos)=>{
      this.productos = productos;
    },(errorObtenido)=>{
      console.log(errorObtenido)
    })
  }

  irADetalle(producto: Producto)
  {
  this.router.navigate(['producto-detalle', {productoP: JSON.stringify(producto)}])  
  }

  eliminarProducto(productoID: number)
  {
    this.productoServicio.eliminarProducto(productoID).subscribe(()=>{
      console.log("Noticia Eliminada")
    },
    error=>{
      console.log(error)
    })
  }

}
