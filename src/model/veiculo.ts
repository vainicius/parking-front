import { AbstractEntity } from "./abstract-entity";
import { Cor } from "./cor";
import { Modelo } from "./modelo";
import { tipo } from "./tipo";

export class Veiculo extends AbstractEntity{
    placa! : string 
    modelo! : Modelo
    cor! : Cor
    tipo! : tipo
    ano! : number
}