import { Component, signal } from '@angular/core';
import { Atleta } from '../../../models/atleta';
import { AtletaServiceService } from '../../../service/atleta-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.component.html',
  styleUrl: './atleta-lista-component.component.css',
  standalone: true
})
export class AtletaListaComponent {

  listaAtletas = signal<Atleta[]>([]);

  constructor(
    private listaService: AtletaServiceService,
    private router: Router
  ) { }

  // CALCULAR IDADE
  calcularIdade(dataNascimento: string): number {

    if (!dataNascimento) {
      return 0;
    }

    const nascimento = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (
      hoje.getMonth() < nascimento.getMonth() ||
      (
        hoje.getMonth() === nascimento.getMonth() &&
        hoje.getDate() < nascimento.getDate()
      )
    ) {
      idade--;
    }

    return idade;
  }

  // CALCULAR IMC
  calcularImc(peso: number, altura: number): number {

    if (peso <= 0 || altura <= 0) {
      return 0;
    }

    // Se a altura estiver em centímetros,
    // transforma para metros
    if (altura > 3) {
      altura = altura / 100;
    }

    return peso / (altura * altura);
  }

  // CLASSIFICAR IMC
  classificarImc(imc: number): string {

    if (imc <= 0) {
      return 'Altura ou peso inválido';
    }

    if (imc < 18.5) {
      return 'Abaixo do peso';
    }

    if (imc < 25) {
      return 'Peso normal';
    }

    if (imc < 30) {
      return 'Sobrepeso';
    }

    if (imc < 35) {
      return 'Obesidade grau I';
    }

    if (imc < 40) {
      return 'Obesidade grau II';
    }

    return 'Obesidade grau III';
  }

  // INICIAR
  ngOnInit() {
    this.listar();
  }

  // LISTAR ATLETAS
  listar() {

    this.listaService.listarAtletas()
      .subscribe({

        next: (dadosAtletas) => {

          this.listaAtletas.set(
            [...dadosAtletas].sort(
              (a, b) =>
                (a.nome || '').localeCompare(b.nome || '')
            )
          );

          console.table(this.listaAtletas());
        },

        error: (msgErro) => {
          console.log(
            'Erro ao listar Atletas ',
            msgErro
          );
        }

      });
  }

  // EXCLUIR ATLETA
  excluir(id: number) {

    if (confirm('Deseja Excluir o Atleta?')) {

      this.listaService.excluirAtleta(id)
        .subscribe({

          next: (resposta) => {

            console.log(
              'Excluído com Sucesso!!',
              resposta
            );

            this.listar();
          },

          error: (msgErro) => {

            console.log(
              'Erro ao excluir Atleta',
              msgErro
            );

          }

        });
    }
  }

  // ABRIR FORMULÁRIO PARA ALTERAR
  carregaDadosAtletaForm(atleta: Atleta) {

    this.router.navigate([
      '/cadastroAtleta',
      atleta.idpessoa
    ]);

  }

}