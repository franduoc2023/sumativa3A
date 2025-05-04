import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ForoService, ForoDto } from '../services/foro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  host: {
    'ngSkipHydration': ''  // 👈 esta línea es la clave
  }
})
export class PostComponent implements OnInit {
  foroForm: FormGroup;
  mensajes: ForoDto[] = [];

  constructor(private fb: FormBuilder, private foroService: ForoService) {
    this.foroForm = this.fb.group({
      comentario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.foroService.obtenerForos().subscribe({
      next: (data) => {
        this.mensajes = data;
      },
      error: (err) => console.error('Error al cargar comentarios:', err)
    });
  }

  enviarComentario(): void {

     if (this.foroForm.valid) {
      this.foroService.agregarComentario(this.foroForm.value).subscribe({
        next: () => {
          this.mensajes.push({
            comentario: this.foroForm.value.comentario,
            fechaCreacion: new Date().toISOString(),
            id: 0
          });
          this.foroForm.reset();
        },
        error: (err) => console.error('Error al enviar comentario:', err)

      });
    }
  }
}
