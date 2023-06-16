import { AbstractEntity } from "./abstract-entity"

export class Condutor extends AbstractEntity{
 nomeCondutor! : string
 cpf! : string
 telefone! : string
 tempoPago! : Date
 tempoDesconto! : Date   
}