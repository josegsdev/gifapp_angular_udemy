import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {


  constructor(private gifServ:GifsService){}
  @ViewChild('cajaBuscar') public txtBuscar!:ElementRef<HTMLInputElement>; 
  buscar(){
    this.gifServ.agregarBusqueda(this.txtBuscar.nativeElement.value);
    console.log(this.gifServ.historial);
    this.txtBuscar.nativeElement.value='';
  }

}
