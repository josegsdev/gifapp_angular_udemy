import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'//propiedad que hace disponible de forma global
  // el servicio sin tener que importarlo
})
export class GifsService {
  private _apiKey:string= 'RsN2cA8VwENy5cer2pc9JBz16SKtyrcU';
  private _historial:string[]=[];
  public resultados:Gif[]=[];

  private _baseUrl:string='http://api.giphy.com/v1/gifs';

  constructor( private _http:HttpClient) {

    this._historial= JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados= JSON.parse(localStorage.getItem('resultados')!) || [];
    /*if(localStorage.getItem('historial')){
      this._historial=JSON.parse(localStorage.getItem('historial')!);
    }*/
   }

  get historial():string[]{
      return [...this._historial];
  }

  agregarBusqueda(s:string):void{
    if(!this._historial.includes(s)){
      this._historial.unshift(s.toLocaleLowerCase());
      localStorage.setItem('historial',JSON.stringify(this.historial));
    }

    const parametros = new HttpParams().set('api_key', this._apiKey)
                                      .set('limit', '10')
                                      .set('q',s);

    this._http.get<SearchGifResponse>(`${ this._baseUrl }/search`, { params:parametros })
    .subscribe((resp) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados',JSON.stringify(resp.data));
    })

    console.log(`agregado ${ s }`);
  }
}
