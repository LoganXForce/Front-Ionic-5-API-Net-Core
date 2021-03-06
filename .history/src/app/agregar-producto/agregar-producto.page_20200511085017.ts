import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.models';
import { Proveedor } from '../models/proveedor.models';
import { ProductosService } from '../services/productos.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  proveedores: Proveedor[] = new Array<Proveedor>();
  producto: Producto = new Producto(); 

  constructor(private productoServicio: ProductosService, public loadingController: LoadingController, public toastController: ToastController) { }

  ngOnInit() {
    this.productoServicio.ListadoDeProveedores().subscribe((listadoProveedores) => {
      this.proveedores = (listadoProveedores);
      console.log(listadoProveedores);
    })
  }

  async guardar(){
    const loading = await this.loadingController.create({
      message: 'Guardando nuevo registro...',
    });
    await loading.present();

    this.productoServicio.agregarProducto(this.producto).subscribe(()=>{
      loading.dismiss();
    }, error =>{
      loading.dismiss();
    })
  }

}
