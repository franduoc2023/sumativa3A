import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { UsuariosService } from '../services/usuario.service'; 
 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ] 
})
export class RegistroComponent {
  registroForm: FormGroup;
  crearUsuario: any[] = [];

  constructor(private fb: FormBuilder , private router: Router  ,private usuarioService: UsuariosService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('.*[A-Z].*'),                  
        Validators.pattern('.*[a-z].*'),                   
        Validators.pattern('.*\\d.*'),                    
        Validators.pattern('.*[!@#$%^&*(),.?":{}|<>].*')   
      ])],
      fechaNacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid){
      const datos = this.registroForm.value;

      this.usuarioService.crearUsuario(datos).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: () => {
         }
      });
    }}
    
  
}