import { AbstractEntity } from "./abstract-entity";
import { Marca } from "./marca";

export class Modelo extends AbstractEntity{
    nomeModelo! : string
    marca! : Marca
}