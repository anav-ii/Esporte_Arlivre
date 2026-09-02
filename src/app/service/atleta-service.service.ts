import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AtletaServiceService {

    constructor(private http: HttpClient) { }

    listarAtletas(): Observable<Atleta[]> {
        const urlApi = `http://127.0.0.1:8000/pessoa/`
        return this.http.get<Atleta[]>(urlApi)
    }

    listarAtleta(idAtleta: number): Observable<Atleta> {
        const urlApi = `http://127.0.0.1:8000/pessoa/${idAtleta}`
        return this.http.get<Atleta>(urlApi)
    }

    salvarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `http://127.0.0.1:8000/pessoa/`
        return this.http.post<Atleta>(urlApi, atleta)
    }

    excluirAtleta(idAtleta: number): Observable<Atleta> {
        const urlApi = `http://127.0.0.1:8000/pessoa/${idAtleta}`
        return this.http.delete<Atleta>(urlApi)
    }

    alterarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`

        return this.http.put<Atleta>(urlApi, atleta)
    }


    /*
    //DECLARANDO ARRAY atletas
    private atletas: Atleta[] = []

    //DECLARAÇÃO DAS FUNÇÕES DE MANIPULAÇÃO DO ARRAY
    //ADICIONANDO ELEMNTO
    adicionarAtleta(atleta: Atleta){
        //ARRRRRMMMMMENNGUE PARA GERAR ID
        atleta.id = this.atletas.length + 1
        this.atletas.push(atleta)
    }

    //LISTAR ELEMENTOS
    listarAtletas(){
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
        this.atletas.splice(1,posArray)
    }

    //ALTERANDO ELEMENTO DO ARRAY
    alterarElemento(atleta: Atleta){
        let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
        this.atletas[posArray] = atleta
    }*/


}