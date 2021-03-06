import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.models';
import { Proveedor } from '../models/proveedor.models';
import { ProductosService } from '../services/productos.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  proveedores: Proveedor[] = new Array<Proveedor>();
  producto: Producto = new Producto(); 

  esEditable: boolean = false;

  // tslint:disable-next-line: max-line-length
  constructor(private productoServicio: ProductosService, public loadingController: LoadingController,public toastController: ToastController,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    if(this.activatedRoute.snapshot.params.editarProducto != undefined)
    {
      this.producto = new Producto(JSON.parse(this.activatedRoute.snapshot.params.editarProducto));
      this.esEditable = true;
    }

    
    this.productoServicio.ListadoDeProveedores().subscribe((listadoProveedores) => {
      this.proveedores = (listadoProveedores);
      
    })
  }

  async guardar(){
    const loading = await this.loadingController.create({
      message: 'Guardando nuevo registro...',
    });
    await loading.present();

    this.productoServicio.agregarProducto(this.producto).subscribe(()=>{
      this.productos.splice(indice,1);
      this.producto = new Producto(null);
      loading.dismiss();
      this.mostrarMensaje("Producto Guardado!")


    }, error =>{
      this.mostrarMensaje("Oops algo a salido mal!")
      loading.dismiss();
    })
  }


  async editar(){
    const loading = await this.loadingController.create({
      message: 'Editando el registro...',
    });
    await loading.present();

    this.productoServicio.editarProducto(this.producto).subscribe(()=>{
      loading.dismiss();
      this.mostrarMensaje("Informacion actualizada!")


    }, error =>{
      this.mostrarMensaje("Oops algo a salido mal!")
      loading.dismiss();
    })
  }

  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  }


