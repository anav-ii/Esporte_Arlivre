import { Injectable } from '@angular/core';
import { Corrida } from '../models/corridas';

@Injectable({
  providedIn: 'root'
})
export class CorridaserviceService {

  private corridas: Corrida[] = [];

  corridaSelecionada: Corrida | null = null;

  constructor() {
    this.carregarCorridas();
  }

  adicionarCorrida(corrida: Corrida): void {

    this.corridas.push(corrida);

    this.salvarCorridas();
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

    this.salvarCorridas();
  }

  private salvarCorridas(): void {

    localStorage.setItem(
      'corridas',
      JSON.stringify(this.corridas)
    );
  }

  private carregarCorridas(): void {

    const corridasSalvas = localStorage.getItem('corridas');

    if (corridasSalvas) {
      this.corridas = JSON.parse(corridasSalvas);
    }
  }
}