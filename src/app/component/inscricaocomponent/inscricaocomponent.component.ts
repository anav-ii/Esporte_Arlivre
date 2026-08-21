import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Corrida } from '../../models/corridas';
import { CorridaserviceService } from '../../service/corridaservice.service';

import { Atleta } from '../../models/atleta';
import { AtletaServiceService } from '../../service/atleta-service.service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscricaocomponent.component.html',
  styleUrl: './inscricaocomponent.component.css'
})
export class InscricaocomponentComponent {

  // Corridas
  corridas: Corrida[] = [];
  corridaSelecionada: Corrida | null = null;

  // Atletas
  atletas: Atleta[] = [];
  atletaSelecionado: Atleta | null = null;

  // Dados da inscrição
  cpf: string = '';
  distancia: string = '';
  camiseta: string = '';
  categoria: string = 'Geral / 30-55 anos';
  aceito: boolean = false;

  constructor(
    private corridaService: CorridaserviceService,
    private atletaService: AtletaServiceService
  ) {
    this.corridas = this.corridaService.listarCorridas();

    this.corridaSelecionada =
      this.corridaService.corridaSelecionada;

    this.listarAtletas();
  }

  //adicionado para lista os atletas de listaAtletas'
  listarAtletas(): void {
    this.atletaService.listarAtletas()
      .subscribe({
        next: (dadosAtletas) => {
          this.atletas = [...dadosAtletas].sort(
            (a, b) => (a.nome ?? '').localeCompare(b.nome ?? '')
          );
        },
        error: (erro) => {
          console.log('Erro ao listar atletas:', erro);
        }
      });
  }

  finalizarInscricao(): void {

    if (!this.atletaSelecionado && !this.cpf) {
      alert('Selecione um atleta ou informe o CPF!');
      return;
    }

    if (!this.corridaSelecionada) {
      alert('Selecione uma corrida!');
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
      'Atleta: ' + this.atletaSelecionado?.nome +
      '\nCorrida: ' + this.corridaSelecionada.descricaoCorrida +
      '\nData: ' + this.corridaSelecionada.data +
      '\nDistância: ' + this.distancia +
      '\nCamiseta: ' + this.camiseta
    );
  }
}