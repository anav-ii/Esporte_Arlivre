import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corridas';
import { CorridaserviceService } from '../../service/corridaservice.service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscricaocomponent.component.html',
  styleUrl: './inscricaocomponent.component.css'
})
export class InscricaocomponentComponent {

  corridas: Corrida[] = [];

  corridaSelecionada: Corrida | null = null;

  atleta: string = '';
  cpf: string = '';
  distancia: string = '';
  camiseta: string = '';
  categoria: string = 'Geral / 30-55 anos';
  aceito: boolean = false;

  constructor(private corridaService: CorridaserviceService) {

    // Pega todas as corridas cadastradas
    this.corridas = this.corridaService.listarCorridas();

    // Pega a corrida clicada em "Inscrever-se"
    this.corridaSelecionada =
      this.corridaService.corridaSelecionada;
  }

  finalizarInscricao(): void {

    if (!this.corridaSelecionada) {
      alert('Selecione uma corrida!');
      return;
    }

    if (!this.atleta && !this.cpf) {
      alert('Selecione um atleta ou informe o CPF!');
      return;
    }

    if (!this.distancia) {
      alert('Selecione a distância!');
      return;
    }

    if (!this.camiseta) {
      alert('Selecione o tamanho da camiseta!');
      return;
    }

    if (!this.aceito) {
      alert('Você precisa aceitar os termos!');
      return;
    }

    alert(
      'Inscrição realizada com sucesso!\n\n' +
      'Corrida: ' + this.corridaSelecionada.descricaoCorrida +
      '\nData: ' + this.corridaSelecionada.data +
      '\nAtleta: ' + (this.atleta || 'CPF: ' + this.cpf) +
      '\nDistância: ' + this.distancia +
      '\nCamiseta: ' + this.camiseta
    );
  }
}