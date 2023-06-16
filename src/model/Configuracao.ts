import { AbstractEntity } from "./abstract-entity";

export class Configuracao extends AbstractEntity{
    valorHora! : Number
    valorMinutoMulta! : Number
    InicioExpediente! : Date
    fimExpediente! : Date
    tempoParaDesconto! : Date
    tempoDeDesconto! : Date
    gerarDesconto! : boolean
    vagasMoto! : number
    vagasCarro! : number
    vagasVan! : number
}