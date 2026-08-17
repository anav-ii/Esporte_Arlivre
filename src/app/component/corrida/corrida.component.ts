import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  km: number = 0;

  salvar(): void {
    console.log('Descrição:', this.descricaoCorrida);
    console.log('Data:', this.data);
    console.log('Distância:', this.km);

    alert('Corrida cadastrada com sucesso!');
  }
}