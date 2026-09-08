import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Atleta } from '../../models/atleta';
import { AtletaServiceService } from '../../service/atleta-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atleta-component.component.html',
  styleUrl: './atleta-component.component.css',
})
export class AtletaComponent {

  nome = '';
  sexo = '';
  datanascimento: string = '';
  peso = 0;
  altura = 0;

  idAtleta = 0;
  editar = false;

  constructor(
    private atletaService: AtletaServiceService,
    private rota: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.idAtleta = Number(
      this.rota.snapshot.paramMap.get('id')
    );

    if (this.idAtleta > 0) {
      this.editar = true;
      this.carregaDados(this.idAtleta);
    }
  }

  limparDados() {

    this.nome = '';
    this.sexo = '';
    this.datanascimento = '';
    this.peso = 0;
    this.altura = 0;
  }

  carregaDados(idAtleta: number) {

    this.atletaService.listarAtleta(idAtleta)
      .subscribe({

        next: (dadosAtleta) => {

          this.nome = dadosAtleta.nome;
          this.sexo = dadosAtleta.sexo;
          this.datanascimento = dadosAtleta.datanascimento;
          this.peso = dadosAtleta.peso;
          this.altura = dadosAtleta.altura;

          this.cdr.detectChanges();
        },

        error: (msgErro) => {

          console.log(
            'ERRO AO LISTAR ATLETA',
            msgErro
          );
        }
      });
  }

  enviarDadosAtleta() {

    const atleta = new Atleta();

    atleta.nome = this.nome;
    atleta.sexo = this.sexo;
    atleta.datanascimento = this.datanascimento;
    atleta.peso = this.peso;
    atleta.altura = this.altura;

    // EDITAR ATLETA
    if (this.editar) {

      atleta.idpessoa = this.idAtleta;

      this.atletaService.alterarAtleta(atleta)
        .subscribe({

          next: (resposta) => {

            console.log(
              'Atleta alterado com sucesso!',
              resposta
            );

            alert('Atleta alterado com sucesso!');

            this.limparDados();
          },

          error: (msgErro) => {

            console.log(
              'Erro ao alterar atleta:',
              msgErro
            );
          }
        });

    } 
    
    // CADASTRAR NOVO ATLETA
    else {

      this.atletaService.salvarAtleta(atleta)
        .subscribe({

          next: (resposta) => {

            console.log(
              'Atleta cadastrado com sucesso!',
              resposta
            );

            alert('Atleta cadastrado com sucesso!');

            this.limparDados();
          },

          error: (msgErro) => {

            console.log(
              'Erro ao cadastrar atleta:',
              msgErro
            );
          }
        });
    }
  }
}