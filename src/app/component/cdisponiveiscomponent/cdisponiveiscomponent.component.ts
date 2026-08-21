import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Corrida } from '../../models/corridas';
import { CorridaserviceService } from '../../service/corridaservice.service';

@Component({
  selector: 'app-cdisponiveiscomponent',
  standalone: true,
  imports: [],
  templateUrl: './cdisponiveiscomponent.component.html',
  styleUrl: './cdisponiveiscomponent.component.css'
})
export class CdisponiveiscomponentComponent {

  corridas: Corrida[] = [];

  constructor(
    private corridaService: CorridaserviceService,
    private router: Router
  ) {
    this.corridas = this.corridaService.listarCorridas();
  }

  inscrever(corrida: Corrida): void {

    this.corridaService.selecionarCorrida(corrida);

    this.router.navigate(['/inscricao']);
  }

  excluir(id: number): void {

    const confirmar = confirm('Deseja realmente excluir esta corrida?');

    if (confirmar) {
      this.corridaService.excluirCorrida(id);

      this.corridas = this.corridaService.listarCorridas();

      alert('Corrida excluída com sucesso!');
    }
  }
}