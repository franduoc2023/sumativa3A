import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
 import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { AuthService } from '../../app/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,  RouterModule, ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm: FormGroup;


 usuariosRegistrados: { email: string; password: string }[] = [
  { email: 'usuario@gmail.com', password: '123456' }
];

constructor(
  private fb: FormBuilder,
  private router: Router,
  private auth: AuthService
)

{
  this.loginForm = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}
 
 
  onLogin() {
    if (this.loginForm.valid) {
      const { emailAddress, password } = this.loginForm.value;

       const usuarioValido = this.usuariosRegistrados.find(
        u => u.email === emailAddress && u.password === password
      );

      if (usuarioValido) {
        this.auth.login();
        this.router.navigate(['/home']);
      } 
    }
  }
}


