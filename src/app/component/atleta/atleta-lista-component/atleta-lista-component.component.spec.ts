import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';

import { AtletaListComponent } from './atleta-lista-component.component';

describe('AtletaListaComponent', () =>{

  let service: AtletaListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AtletaListComponent,
      provideHttpClient()
      ]
    })

    service = TestBed.inject( AtletaListComponent);
  });

  it('deve calcular a idade corretamente', () => {
    const resultado = service.calcularIdade('1976-05-05');

    expect(resultado).toBe;
  })

})