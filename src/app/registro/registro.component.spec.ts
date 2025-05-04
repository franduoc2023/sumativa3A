import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroComponent,HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('comprobamos las validaciones del formulario no debe activar boton', () => {
    component.registroForm.setValue({
      nombre: '',
      apellido: '',
      nombreUsuario: '',
      password: '',
      fechaNacimiento: '',
      email: ''
    });
  
    const spy = spyOn(component['usuarioService'], 'crearUsuario');
    component.onSubmit();
  
    expect(spy).not.toHaveBeenCalled(); 
  });
  
});
