import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // 👈 importante
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuperacion',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],  
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent {
  recuperacionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recuperacionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
     
     
}
}