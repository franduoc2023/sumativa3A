import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ForoDto2 {
  titulo: string;
  descripcion: string;
  link: string;
  colorClass: string;
}


export interface ForoDto {
  id: number;
  comentario: string;
  fechaCreacion: string;
}


@Injectable({
  providedIn: 'root'
})
export class ForoService {
  private apiUrl = 'http://localhost:8080/usuarios/foro';  


  

  constructor(private http: HttpClient) {}

  agregarComentario(foroDto: { comentario: string }): Observable<string> {
    return this.http.post('http://localhost:8080/usuarios/foro', foroDto, {
      responseType: 'text',
      withCredentials: true 
    });
  }

  obtenerForos(): Observable<ForoDto[]> {
    return this.http.get<ForoDto[]>('http://localhost:8080/usuarios/foro', {
      withCredentials: true
    });
  }




  
}