import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  private authService = inject( AuthService );
  private fb          = inject( FormBuilder );
  private router      = inject( Router );


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.email]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  register(){
    console.log({errors: this.myForm})
  }
}
