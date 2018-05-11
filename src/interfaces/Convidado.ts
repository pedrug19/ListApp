import {Evento} from "./Evento";

export class Convidado {
	id: number;
	nome: string;
	pagante : string;
	rg : string;
	cpf : string;
	evento: Evento;
	presenca : string;
	familia: Convidado[];
}