import { Injectable } from '@angular/core';
import { Corrida } from '../models/corridas';

@Injectable({
  providedIn: 'root'
})
export class CorridaserviceService {

  private corridas: Corrida[] = [];

  adicionarCorrida(corrida: Corrida): void {
    this.corridas.push(corrida);
  }

  listarCorridas(): Corrida[] {
    return this.corridas;
  }

  excluirCorrida(id: number): void {
    this.corridas = this.corridas.filter(
      corrida => corrida.id !== id
    );
  }
}