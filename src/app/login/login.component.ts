import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
 import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,  RouterModule, ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm: FormGroup;


 
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

    this.auth.login(emailAddress, password).subscribe({
      next: (res) => {
         localStorage.setItem('usuarioId', res.id);
         this.router.navigate(['/panel']); 
            },
      error: (err) => {
        alert('Credenciales inválidas');
      }
    });
  }



  
}}

