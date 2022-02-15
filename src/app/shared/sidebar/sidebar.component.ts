import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  constructor(private gifServ:GifsService) { }

  get historial():string[]{
    return this.gifServ.historial.splice(0,10);
  }

  busquedaHistorial(e:string){
    this.gifServ.agregarBusqueda(e);
    console.log(e);
  }
  

}
