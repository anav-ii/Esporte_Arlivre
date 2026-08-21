import { Injectable } from '@angular/core';
import { Corrida } from '../models/corridas';

@Injectable({
  providedIn: 'root'
})
export class CorridaserviceService {

  private corridas: Corrida[] = [];

  corridaSelecionada: Corrida | null = null;

  adicionarCorrida(corrida: Corrida): void {
    this.corridas.push(corrida);
  }

  listarCorridas(): Corrida[] {
    return this.corridas;
  }

  selecionarCorrida(corrida: Corrida): void {
    this.corridaSelecionada = corrida;
  }

  excluirCorrida(id: number): void {
    this.corridas = this.corridas.filter(
      corrida => corrida.id !== id
    );
  }
}