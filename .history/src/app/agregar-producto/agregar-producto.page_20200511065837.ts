import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../.history/src/app/services/productos.service_20200511065725';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
  }

}
