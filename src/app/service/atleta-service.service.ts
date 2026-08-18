import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {

     constructor(private http: HttpClient) { }
  listarAtleta(): Observable<Atleta[]> {
      const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
      return this.http.get<Atleta[]>(urlApi)
  }

  adicionarAtleta(atleta: Atleta): Observable<Atleta> {
      const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
      return this.http.post<Atleta>(urlApi, atleta)
  }

  removerAtleta(idAtleta: number): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`
    return this.http.delete<Atleta>(urlApi)
  }

  alterarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`
    return this.http.put<Atleta>(urlApi, atleta)
  }


    /*//DECLARANDO ARRAY
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
  constructor() { }*/
}
