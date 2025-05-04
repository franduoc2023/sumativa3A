import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: jasmine.createSpyObj('AuthService', ['isLoggedIn']) },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });


  it('usuario tipo visita puede entrar ', () => {
    const authServiceMock = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  
    authServiceMock.isLoggedIn.and.returnValue(true);
  
    const guard = new AuthGuard(authServiceMock, routerMock);
    const result = guard.canActivate();
  
    expect(result).toBeTrue();
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });
  

  it('redigie a la visita si no es tipo usuario registrado', () => {
    const authServiceMock = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  
    authServiceMock.isLoggedIn.and.returnValue(false);
  
    const guard = new AuthGuard(authServiceMock, routerMock);
    const result = guard.canActivate();
  
    expect(result).toBeFalse();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });
  




});
