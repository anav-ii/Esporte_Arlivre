import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';  




@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {
    //DECLARANDO ARRAY
    private atletas: Atleta[] = []

    //DECLARAÇÃO DAS FUNÇÕES DE MANIPULAÇÃO DO ARRAY
    //ADICIONADO ELEMENTO
    adicionarAtleta(atleta: Atleta){
      this.atletas.push(atleta)
    }

    //LISTAR ELEMENTOS
    listarAtleta(){
        console.table(this.atletas)

        return this.atletas
    }

    //REMOVER ELEMENTO
    removerElemento(idAtleta: number){
        this.atletas = this.atletas.filter(elem=>elem.id !== idAtleta)
    }

    //REMOVER ELEMENTO2
    removerElemento2(atleta: Atleta){
      let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
      this.atletas.splice(1, posArray)
    }

    //ALTERANDO ELEMENTO DO ARRAY
    alterarElemento(atleta: Atleta){
      let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
      this.atletas[posArray] = atleta
    }
  constructor() { }
}
