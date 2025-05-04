import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


//https://www.youtube.com/watch?v=rMQ9_lvUQGk&ab_channel=DominiCode
describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelComponent, HttpClientTestingModule,RouterTestingModule,RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Click para luego ejecutar la alerta ', () => {
    const spy = spyOn(component, 'mostrarToast');
    component.onDelete();
    expect(spy).toHaveBeenCalled();
  });




it(' comprobacion del ngOnInit ' , ()=> {

const objetoUsuario = {

     id:1,
     nombre: 'francisco',
    apellido: 'salinas',
      nombreUsuario: 'fran1',
      password: 'Password123!',
      fechaNacimiento: '2000-01-01',
      email: 'diego@gmail.com'
    };
    spyOn(localStorage, 'getItem').and.returnValue('1');


    const spy = spyOn(component['usuarioService'], 'getUsuarioPorId').and.returnValue(of(objetoUsuario));


    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(1);
    expect(component.registroForm.value.nombre).toEqual('francisco');
    expect(component.registroForm.value.email).toEqual('diego@gmail.com');
    expect(component.getUsuarioPorId).toBe(1);


  }); 

  it('no ejecuta sin el ID ', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const spy = spyOn(component['usuarioService'], 'getUsuarioPorId');
    component.ngOnInit();
    expect(spy).not.toHaveBeenCalled();
  });



  it('debería enviar datos si el formulario es válido', () => {
    component.getUsuarioPorId = 1;
    component.registroForm.setValue({
      nombre: 'francisco',
      apellido: 'salinas',
      nombreUsuario: 'fran1',
      password: 'Password123!',
      fechaNacimiento: '2000-01-01',
      email: 'diego@gmail.com'
    });
  
    const spy = spyOn(component['usuarioService'], 'actualizarUsuario').and.returnValue(of({}));
    spyOn(component, 'mostrarToast');
  
    component.onSubmit();
  
    expect(spy).toHaveBeenCalled();
    expect(component.mostrarToast).toHaveBeenCalled();
  });
  
  
  

  
});
