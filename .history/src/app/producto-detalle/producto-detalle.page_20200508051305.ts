import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto.models';
import { ProductosService } from '../../../.history/src/app/services/productos.service_20200508045358';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {

  producto: Producto;
  cargo: boolean = false;
  constructor(private router: ActivatedRoute, private ProductosServicio: ProductosService) { }

  ngOnInit() {
    this.router.params.subscribe((id)=>{
      console.log(id)
      this.ProductosServicio.porProductoID(id.productoID).subscribe((producto)=>{
        this.producto = producto;
        this.cargo = true;

        console.log(producto)
      })
    })
  }

}
