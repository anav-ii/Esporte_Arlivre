import { Injectable } from '@angular/core';
import { Corrida } from '../models/corridas';

@Injectable({
  providedIn: 'root'
})
export class CorridaserviceService {

  private corridas: Corrida[] = [];

  constructor() { }

  adicionarCorrida(corrida: Corrida) {
    this.corridas.push(corrida);
  }

  listarCorridas(): Corrida[] {
    return this.corridas;
  }
}