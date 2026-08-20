import { Component } from '@angular/core';
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

  constructor(private corridaService: CorridaserviceService) {
    this.corridas = this.corridaService.listarCorridas();
  }

  inscrever(corrida: Corrida) {
    alert('Você se inscreveu na corrida: ' + corrida.descricaoCorrida);
  }

}