import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convidado } from '../../interfaces/Convidado'

/*
  Generated class for the ConvidadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConvidadoProvider {

	convidados: Convidado[] = [
    {id:0,nome:"Jorginho", pagante:null, rg:null, cpf:null , evento:null, presenca: null, familia: null}, 
    {id:1,nome:"Zezinho", pagante:null, rg:null, cpf:null , evento:null, presenca: null, familia: null},
    {id:2,nome:"Pedren", pagante:null, rg:null, cpf:null , evento:null, presenca: null, familia: null}
  ];

  constructor(public http: HttpClient) {
    console.log('Hello ConvidadoProvider Provider');
  }

  all() {
  	return this.convidados;
  }
  
  add(object) {
    this.convidados.push(object);
  }

  get(id){
    return this.convidados[id];
  }

  size(){
    return Object.keys(this.convidados).length;
  }
  update(object){
    this.convidados[object.id] = object;

  }

}



