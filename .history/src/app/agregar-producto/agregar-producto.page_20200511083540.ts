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

  constructor(private productoServicio: ProductosService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.productoServicio.ListadoDeProveedores().subscribe((listadoProveedores) => {
      this.proveedores = (listadoProveedores);
      console.log(listadoProveedores);
    })
  }

  asyc guardar(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.productoServicio.agregarProducto(this.producto).subscribe(()=>{
      console.log("Se registro el nuevo producto exitosamente")
    }, error =>{
      console.log(error)
    })
  }

}
