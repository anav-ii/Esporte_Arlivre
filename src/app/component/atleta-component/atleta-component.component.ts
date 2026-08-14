import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaServiceService } from '../../service/atleta-service.service';
import { Atleta } from '../../models/atleta';

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atleta-component.component.html',
  styleUrl: './atleta-component.component.css'
})
export class AtletaComponentComponent {

  constructor(private atletaService: AtletaServiceService) {}

  // DECLARANDO ATRIBUTOS
  nome = '';
  cpf = 0;
  sexo = '';
  cep = 0;
  ruaLogradouro = '';
  bairro = '';
  cidade = '';
  uf = '';

  // DECLARAÇÃO DE FUNÇÕES
  exibirDados() {
    console.log(
      this.nome,
      this.cpf,
      this.sexo,
      this.cep,
      this.ruaLogradouro,
      this.bairro,
      this.cidade,
      this.uf
    );

    this.limparDados();
  }

  limparDados() {
    this.nome = '';
    this.cpf = 0;
    this.sexo = '';
    this.cep = 0;
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
  }

  salvar() {
    const atleta = new Atleta();

    atleta.nome = this.nome;
    atleta.cpf = this.cpf;
    atleta.sexo = this.sexo;
    atleta.cep = this.cep;
    atleta.ruaLogradouro = this.ruaLogradouro;
    atleta.bairro = this.bairro;
    atleta.cidade = this.cidade;
    atleta.uf = this.uf;

    this.atletaService.adicionarAtleta(atleta);

    this.limparDados();

    this.atletaService.listarAtleta();
  }
}