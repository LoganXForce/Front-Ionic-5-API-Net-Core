import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {

  producto: Producto
  constructor(private state: ActivatedRoute) { }

  ngOnInit() {
    console.log(JSON.parse(this.state.snapshot.params.productoP))
    
  }

}
