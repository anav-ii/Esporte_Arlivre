import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { AtletaListaComponent } from './atleta-lista-component.component';
import { AtletaServiceService } from '../../../service/atleta-service.service';
import { Atleta } from '../../../models/atleta';


describe('AtletaListaComponent', () => {

  let comp_atleta: AtletaListaComponent;
  let httpMock: HttpTestingController;
  let service: AtletaServiceService;


  beforeEach(() => {

    TestBed.configureTestingModule({

      providers: [
        AtletaListaComponent,
        provideHttpClient(),
        provideHttpClientTesting()
      ]

    });

    comp_atleta = TestBed.inject(AtletaListaComponent);

    service = TestBed.inject(AtletaServiceService);

    httpMock = TestBed.inject(HttpTestingController);

  });


  // TESTE DA IDADE
  it('deve calcular a idade corretamente', () => {

    const resultado =
      comp_atleta.calcularIdade('1976-05-05');

    expect(resultado).toBe(50);

  });


  // GET
  it('Deve retornar pessoas', () => {

    const atletasMock: Atleta[] = [

      {
        idpessoa: 1,
        nome: 'João',
        sexo: 'M',
        datanascimento: '2000-02-25',
        peso: 70,
        altura: 1.75
      },

      {
        idpessoa: 2,
        nome: 'Maria',
        sexo: 'F',
        datanascimento: '2010-02-20',
        peso: 55,
        altura: 1.65
      }

    ];


    service.listarAtletas().subscribe(atletas => {

      expect(atletas.length).toBe(2);

      expect(atletas[0].nome).toBe('João');

      expect(atletas[1].nome).toBe('Maria');

    });


    const request = httpMock.expectOne(
      'http://127.0.0.1:8000/pessoa/'
    );


    expect(request.request.method).toBe('GET');


    request.flush(atletasMock);

  });


  // POST
  it('deve adicionar uma pessoa', () => {

    const atleta: Atleta = {

      idpessoa: 3,
      nome: 'Maria Flor',
      sexo: 'F',
      datanascimento: '2000-02-25',
      peso: 60,
      altura: 1.70

    };


    service.salvarAtleta(atleta).subscribe(resposta => {

      expect(resposta).toEqual(atleta);

    });


    const request = httpMock.expectOne(
      'http://127.0.0.1:8000/pessoa/'
    );


    expect(request.request.method).toBe('POST');

    expect(request.request.body).toEqual(atleta);


    request.flush(atleta);

  });


  // PUT
  it('deve editar um atleta', () => {

    const atleta: Atleta = {

      idpessoa: 1,
      nome: 'João Souza',
      sexo: 'M',
      datanascimento: '2000-02-25',
      peso: 75,
      altura: 1.80

    };


    service.alterarAtleta(atleta).subscribe(resposta => {

      expect(resposta).toEqual(atleta);

    });


    const request = httpMock.expectOne(
      'http://127.0.0.1:8000/pessoa/'
    );


    expect(request.request.method).toBe('PUT');

    expect(request.request.body).toEqual(atleta);


    request.flush(atleta);

  });


  // DELETE
  it('deve excluir um atleta', () => {

    service.excluirAtleta(1).subscribe(() => {

      expect(true).toBeTrue();

    });


    const request = httpMock.expectOne(
      'http://127.0.0.1:8000/pessoa/'
    );


    expect(request.request.method).toBe('DELETE');


    request.flush(null);

  });

});
