import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

constructor( private _gifServ:GifsService){}

get resultado(){
  console.log(this._gifServ.resultados);
  return this._gifServ.resultados;
}

}
