import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UrlEndpoint = 'http://localhost:8080/usuarios/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const DatosEnviar = { email, password };

    return this.http.post(this.UrlEndpoint, DatosEnviar, {
      withCredentials: true  
    });
  }
}