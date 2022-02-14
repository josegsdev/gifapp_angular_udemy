import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//propiedad que hace disponible de forma global
  // el servicio sin tener que importarlo
})
export class GifsService {

  constructor() { }

  private _historial:string[]=[];

  get historial():string[]{
      return [...this._historial];
  }

  agregarBusqueda(s:string):void{
    this._historial.push(s);
    console.log(`agregado ${ s }`);
  }
}
