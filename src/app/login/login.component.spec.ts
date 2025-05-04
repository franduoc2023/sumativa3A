import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,LoginComponent,RouterTestingModule,ReactiveFormsModule,LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 

  it('formulario debe ser válido con datos correctos', () => {
    component.loginForm.setValue({
      emailAddress: 'diego@gmail.com',
      password: '74123zxc*Z'
    });
  
    expect(component.loginForm.valid).toBeTrue(); 
  });
  


   it('prueba unitaria del botón', () => {
  const simulaBackend = jasmine.createSpyObj('AuthService', ['login']);
  simulaBackend.login.and.returnValue(of({ id: '1' }));
// creamos contaste con parametro y lo que retorna backend simulado
   (component as any).auth = simulaBackend;

   component.loginForm.setValue({
    emailAddress: 'diego@gmail.com',
    password: '74123zxc*Z'
  });

  component.onLogin();

  expect(simulaBackend.login).toHaveBeenCalledWith('diego@gmail.com', '74123zxc*Z');
});

  
  //https://www.youtube.com/watch?v=KsmXSJcfasU&ab_channel=LeiferMendez

// it para declarar nombre luego lambada , component a probar . traer component . metodo , parametros y expectativa de resultado , luego si es falso o verdadero o parametro de resultado 

// SpynOn verifica la funcion de llamada
// simulaciones de servicios 

//formulario y boton para tener la cobertura

 

});


