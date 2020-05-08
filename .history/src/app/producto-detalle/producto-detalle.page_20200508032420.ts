import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {

  constructor(private state: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.state.snapshot.params.producto)
    
  }

}
