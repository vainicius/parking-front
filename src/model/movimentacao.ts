import { Condutor } from "./Condutor";
import { AbstractEntity } from "./abstract-entity";
import { Veiculo } from "./veiculo";

export class Movimentacao extends AbstractEntity{
    veiculo! : Veiculo
    condutor! : Condutor
    entrada! : Date
    saida! : Date
    tempo! : Date
    tempoDesconto! : Date
    tempoMulta! : Date
    valorDesconto! : Number
    valorMulta! : Number
    valorTotal! : Number
    valorHora! : Number
    valorHoraMulta! : Number
    tempoEstacionadoMinutos! : Number
    tempoMultasMinutos! : Number
    tempoDescontoMinutos! : Number
    horasTempo! : number
    minutosTempo! : number
}