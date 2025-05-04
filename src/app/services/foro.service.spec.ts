import { TestBed } from '@angular/core/testing';
import { ForoService } from './foro.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ForoService', () => {
  let service: ForoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]  
    });
    service = TestBed.inject(ForoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
