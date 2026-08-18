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
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listaService.listarAtleta()
      .subscribe({
        next: (dadosAtletas: Atleta[]) => {

          this.listaAtletas.set(
            [...dadosAtletas].sort((a, b) =>
              a.nome.localeCompare(b.nome)
            )
          );

          console.table(this.listaAtletas());
        },

        error: (msgErro: any) => {
          console.log("Erro ao listar Atletas ", msgErro);
        }
      });
  }

  excluir(id: number) {
    if (confirm("Deseja Excluir o Atleta?")) {

      this.listaService.removerAtleta(id)
        .subscribe({
          next: (resposta: any) => {
            console.log("Excluído com Sucesso!!! ", resposta);

            this.listar();
          },

          error: (msgErro: any) => {
            console.log("Erro ao excluir Atleta ", msgErro);
          }
        });
    }
  }

  carregaDadosAtletaForm(atleta: Atleta) {
    this.router.navigate(['/cadastroAtleta', atleta.id]);
  }
}