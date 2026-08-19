import { Component, ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AtletaServiceService } from '../../service/atleta-service.service';
import { Atleta } from '../../models/atleta';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atleta-component.component.html',
  styleUrl: './atleta-component.component.css',
})
export class AtletaComponent {
  //DECLARANDO ATIBUTOS
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  idAtleta = 0
  editar = false

  //DECLARAÇÃO DO CONSTRUTOR
  constructor(private atletaService: AtletaServiceService,
    private http: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }

  //DECLARAÇÃO DE FUNÇÕES
  exibirDados() {
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf)

    this.limparDados()
  }
  carregaDados(idAtleta: number){
    this.atletaService.listarAtleta(idAtleta)
    .subscribe({
      next:(dadosAtleta)=>{
        this.nome = dadosAtleta.nome
        this.cpf = dadosAtleta.cpf
        this.sexo = dadosAtleta.sexo
        this.cep = dadosAtleta.cep
        this.ruaLogradouro = dadosAtleta.ruaLogradouro
        this.bairro = dadosAtleta.bairro
        this.cidade = dadosAtleta.cidade
        this.uf = dadosAtleta.uf

        //EXECUTA A DETECÇÃO MANUALMENTE
        this.cdr.detectChanges()
      },
      error:(msgErro)=>{
        console.log('ERRO AO LISTAR ATLETA', msgErro)
      }
    })
  }
  ngOnInit(){
    this.idAtleta = Number(this.http.snapshot.paramMap.get('id'))

    if(this.idAtleta > 0){
      this.editar = true
      this.carregaDados(this.idAtleta)
    }
    
  }

  limparDados() {
    this.nome = ''
    this.cpf = 0
    this.sexo = ''
    this.cep = 0
    this.ruaLogradouro = ''
    this.bairro = ''
    this.cidade = ''
    this.uf = ''
  }

  enviarDadosAtleta(){
    const atleta = new Atleta()
    atleta.nome = this.nome
    atleta.cpf = this.cpf
    atleta.sexo = this.sexo
    atleta.cep = this.cep
    atleta.ruaLogradouro = this.ruaLogradouro
    atleta.bairro = this.bairro
    atleta.cidade = this.cidade
    atleta.uf = this.uf

    if(this.editar){
      atleta.id = this.idAtleta

      this.atletaService.alterarAtleta(atleta)
      .subscribe({
        next: (resposta) => {
          console.log(resposta)
        },
        error: (msgErro) => {
          console.log(msgErro)
        } 
      })
    }else{
      this.atletaService.salvarAtleta(atleta)
      .subscribe({
        next:(resposta)=>{
          console.log( resposta)
        },
        error:(msgErro)=>{
          console.log( msgErro)
        }
      })
    }
    
    
    this.limparDados()   

    this.atletaService.listarAtletas()
    

} }