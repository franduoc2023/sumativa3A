import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuario.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UsuarioService', () => {
  let service: UsuariosService;
  let httpSimulado: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
    imports: [HttpClientTestingModule],
    providers: [UsuariosService]

  });
    service = TestBed.inject(UsuariosService);
    httpSimulado= TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


it(' usuario por id ', ()=>{

const  usuarioSimulado = { id: 1, nombre : 'francisco'};

service.getUsuarioPorId(1).subscribe(res => {
  expect(res).toEqual(usuarioSimulado);
});

const req = httpSimulado.expectOne('http://localhost:8080/usuarios/1');
expect(req.request.method).toBe('GET');
expect(req.request.withCredentials).toBeTrue();
req.flush(usuarioSimulado);

});
 ;
});
