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
  datanascimento =''
  peso: number = 0.0
  altura: number = 0.0

  idAtleta = 0
  editar = false

  //DECLARAÇÃO DO CONSTRUTOR
  constructor(private atletaService: AtletaServiceService,
    private http: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }

  //DECLARAÇÃO DE FUNÇÕES
  exibirDados() {
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf, this.datanascimento,  this.peso, this.altura)

    this.limparDados()
  }
  carregaDados(idAtleta: number){
    this.atletaService.listarAtleta(idAtleta)
    .subscribe({
      next:(dadosAtleta)=>{
        this.nome = dadosAtleta.nome
        //this.cpf = dadosAtleta.cpf
        this.sexo = dadosAtleta.sexo
        //this.cep = dadosAtleta.cep
        //this.ruaLogradouro = dadosAtleta.ruaLogradouro
        //this.bairro = dadosAtleta.bairro
        //this.cidade = dadosAtleta.cidade
        //this.uf = dadosAtleta.uf
        this.datanascimento = dadosAtleta.datanascimento
        this.peso = dadosAtleta.peso
        this.altura = dadosAtleta.altura

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
  
  idade = 0

  calcularIdade(datanascimento: string): number {
  const nascimento = new Date(datanascimento)
  const hoje = new Date()

  let idade = hoje.getFullYear() - nascimento.getFullYear()

  const mes = hoje.getMonth() - nascimento.getMonth()

  if (
    mes < 0 ||
    (mes === 0 && hoje.getDate() < nascimento.getDate())
  ) {
    idade--
  }

  return idade
}

  limparDados() {
    this.nome = ''
    //this.cpf = 0
    this.sexo = ''
    //this.cep = 0
    //this.ruaLogradouro = ''
    //this.bairro = ''
    //this.cidade = ''
    //this.uf = ''
    this.datanascimento = ''
    this.peso
    this.altura
  }

  enviarDadosAtleta(){
    const atleta = new Atleta()
    atleta.nome = this.nome
   // atleta.cpf = this.cpf
    atleta.sexo = this.sexo
    //atleta.cep = this.cep
    //atleta.ruaLogradouro = this.ruaLogradouro
    //atleta.bairro = this.bairro
    //atleta.cidade = this.cidade
    //atleta.uf = this.uf
    atleta.datanascimento = this.datanascimento
    atleta.peso = this.peso
    atleta.altura = this.altura


    if(this.editar){
      atleta.idpessoa = this.idAtleta

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