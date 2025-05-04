import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('esta estaba ', () => {
    expect(service).toBeTruthy();
  });

  it('false al inicializar ', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('true si hago login ()', () => {
    service.login();
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('falso despues de logout()', () => {
    service.login();  
    service.logout();  
    expect(service.isLoggedIn()).toBeFalse();
  });
});
