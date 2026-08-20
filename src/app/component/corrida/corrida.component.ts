import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corridas';
import { CorridaserviceService } from '../../service/corridaservice.service';

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css'
})
export class CorridaComponent {

  descricaoCorrida: string = '';
  data: string = '';
  km: string = '';

  constructor(private corridaService: CorridaserviceService) {}

  salvar(): void {

    const corrida: Corrida = {
      id: Date.now(),
      descricaoCorrida: this.descricaoCorrida,
      data: this.data,
      km: this.km
    };

    // Envia a corrida para o Service
    this.corridaService.adicionarCorrida(corrida);

    console.log('Corrida cadastrada:', corrida);

    alert('Corrida cadastrada com sucesso!');

    // Limpa os campos
    this.descricaoCorrida = '';
    this.data = '';
    this.km = '';
  }
}