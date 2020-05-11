import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto.models';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.page.html',
  styleUrls: ['./listado-productos.page.scss'],
})
export class ListadoProductosPage implements OnInit {

  productos: Producto[];
  // tslint:disable-next-line: max-line-length
  constructor(private productoServicio: ProductosService, private router: Router, public loadingController: LoadingController,public toastController: ToastController ) { }

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

  async eliminarProducto(productoID: number, indice: number)
  {
    
    const loading = await this.loadingController.create({
      message: 'Eliminando registro...',
    });
    await loading.present();

    this.productoServicio.eliminarProducto(productoID).subscribe(()=>{
    this.productos.splice(indice,1);

    loading.dismiss();
      this.mostrarMensaje("Producto Eliminado!")

   },
    error=>{
      this.mostrarMensaje("Oops algo a salido mal!")
      loading.dismiss();
    })
  }

}
