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
    {id:0,nome:"Festa lá no meu Apê", data:null, local:null, horario:null }, 
    {id:1,nome:"Aniversário", data:null, local:null, horario:null }, 
    {id:2,nome:"Festa 123", data:null, local:null, horario:null }
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
  update(object){
    this.eventos[object.id] = object;

  }

}
