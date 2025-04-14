import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})


 

export class PanelComponent {
  registroForm: FormGroup;
  //userData: any = {};
  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      firstName: [''], 
      secondName: [''],  
      firstApp: [''], 
      secondApp: [''],  
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.pattern('.*[A-Z].*'),
        Validators.pattern('.*[a-z].*'),
        Validators.pattern('.*\\d.*'),
        Validators.pattern('.*[!@#$%^&*(),.?":{}|<>].*')
      ])], 
      birthdayDate: [''],  
      gender: [''], 
      emailAddress: ['', [Validators.required, Validators.email]],  
      phoneNumber: ['']  
    });
  }


  ngOnInit(): void {
      
  }
 

  onSubmit(): void {
    if (this.registroForm.valid) {
      const updatedUserData = this.registroForm.value;

       
    }  
  }

  onDelete(): void {
     
 
  }
}