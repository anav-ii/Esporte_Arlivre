import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AtletaListComponent } from './atleta-lista-component.component';
import { AtletaServiceService } from '../../../service/atleta-service.service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AtletaComponent } from '../../atleta-component/atleta-component.component';
import { Atleta } from '../../../models/atleta';

describe('AtletaListaComponent, AtletaComponent',() =>{

  let comp_atleta: AtletaListComponent; 
  let httpMock: HttpTestingController;
  let service: AtletaServiceService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      AtletaListComponent,
      provideHttpClient(),
      provideHttpClientTesting()
      ]
    })

    comp_atleta = TestBed.inject(AtletaListComponent);

    service = TestBed.inject(AtletaServiceService);

    httpMock = TestBed.inject(HttpTestingController);

  });

  it('deve calcular a idade corretamente', () => {
    const resultado = comp_atleta.calcularIdade('1976-05-05');

    expect(resultado).toBe(50);
  })

  it('Deve retornar pessoas', () => {

    const atletasMock: Atleta[]= [
        {
          "nome": "João",
          "cpf": 12345678910,
          "sexo": "M",
          "bairro": "Centro",
          "cidade": "Aracaju",
          "uf": "Se",
          "dataNascimento": "2000-02-25",
          "id": 1,
          "cep": 49123123,
          "ruaLogradouro": "Rua Sei lá das quantas"
          
        },
        {
          "nome": "Maria",
          "cpf": 11122233302,
          "sexo": "F",
          "cep": 49123123,
          "bairro": "Centro",
          "cidade": "Aracaju",
          "uf": "Se",
          "dataNascimento": "2010-02-20",
          "id": 2,
          "ruaLogradouro": "Rua Sei lá das quantas",
         
        }
      ]

      service.listarAtletas().subscribe(atletas=>{
        expect(atletasMock.length).toBe(2)
        expect(atletasMock[0].nome).toBe('João')
        expect(atletasMock[1].nome).toBe('Maria')
      })

      const request = httpMock.expectOne(
        'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta'
      )

      expect(request.request.method).toBe('GET')

      request.flush(atletasMock)
      
  })

   // POST
   it('deve adicionar uma pessoa', () => {

    const atleta: Atleta =   {
        "nome": "Maria Flor",
        "cpf": 12345678910,
        "sexo": "M",
        "cep": 49123123,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "dataNascimento": "2000-02-25",
        "id": 3,
        "ruaLogradouro": "Rua Sei lá das quantas"
      }


    service.salvarAtleta(atleta).subscribe(atletas => {

      expect(atletas).toEqual(atletas);

    });


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta'
    );


    expect(request.request.method).toBe('POST');

    expect(request.request.body).toEqual(atleta);

    request.flush(atleta);

  });


  // PUT
  it('deve editar um atleta', () => {

   const atleta: Atleta =   {
        "nome": "João Souza",
        "cpf": 12345678910,
        "sexo": "M",
        "cep": 49123123,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "dataNascimento": "2000-02-25",
        "id": 1,
        "ruaLogradouro": "Rua Sei lá das quantas"
   }


    service.alterarAtleta(atleta).subscribe(atletas => {

      expect(atletas).toEqual(atleta);

    });


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/1'
    );


    expect(request.request.method).toBe('PUT');

    expect(request.request.body).toEqual(atleta);


    request.flush(atleta);

  });


  // DELETE
  it('deve excluir um atleta', () => {

    service.excluirAtleta(1).subscribe();


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/1'
    );


    expect(request.request.method).toBe('DELETE');


    request.flush(null);

  });

});



