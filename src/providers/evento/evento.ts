import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../../interfaces/Evento'

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  eventos: Evento[] = [
    {id:0,nome:"Festa lá no meu Apê", data:"2018-03-02", local:"Meu Apê", horario:null }, 
    {id:1,nome:"Aniversário", data:"2017-11-29", local:"Aqui", horario:null }, 
    {id:2,nome:"Festa 123", data:"2019-01-26", local:"casa123", horario:null }
  ];


  constructor(public http: HttpClient) {
    console.log('Hello EventoProvider Provider');
  }

  all() {
  	return this.eventos;
  }
  add(object) {
    this.eventos.push(object);
  }
  get(id){
    return this.eventos[id];
  }
  size(){
    return Object.keys(this.eventos).length;
  }

}
