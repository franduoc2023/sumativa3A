import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; 
import { UsuariosService } from '../services/usuario.service';



declare var bootstrap: any;
@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  getUsuarioPorId!: number;
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuariosService
  ) {
    this.registroForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      nombreUsuario: [''],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.pattern('.*[A-Z].*'),
        Validators.pattern('.*[a-z].*'),
        Validators.pattern('.*\\d.*'),
        Validators.pattern('.*[!@#$%^&*(),.?":{}|<>].*')
      ])], 
      fechaNacimiento: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const id = localStorage.getItem('usuarioId');
    if (id) {
      this.usuarioService.getUsuarioPorId(Number(id)).subscribe({
        next: (data) => {
          this.getUsuarioPorId = data.id;
          this.registroForm.patchValue({
            nombre: data.nombre,
            apellido: data.apellido,
            nombreUsuario: data.nombreUsuario,
            password: data.password,
            fechaNacimiento: data.fechaNacimiento,
            email: data.email
          });
        },
        error: (err) => {
         }
      });
    }
  }



  onSubmit(): void {
    if (this.registroForm.valid && this.getUsuarioPorId) {
      const datosActualizados = {
        ...this.registroForm.value,
        id: this.getUsuarioPorId
      };
  
      this.usuarioService.actualizarUsuario(this.getUsuarioPorId, datosActualizados)
        .subscribe({
          next: (res) => {
             this.mostrarToast();
          },
          error: (err) => {
           
          }
        });
    }
  }
  
  



  mostrarToast() {
    const toastEl = document.getElementById('liveToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

 
  onDelete(): void {
    this.mostrarToast();

 ;
  }
}


// nota el validor del formulario cuando trae el get del backend si tiene la contraseña
// menos requerimiento que el formulario no activara el botom sumit 
//el subcribe escucha lambada lleva condicion y luego accion con retorno
// los metodos de cada CRUD van en servicios aparte 