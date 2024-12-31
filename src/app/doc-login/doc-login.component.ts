import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // for API call
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-doc-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DocLoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with validation rules
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Handle form submission and API call
  onSubmit(): void {
    this.loginForm.markAllAsTouched(); // Mark controls as touched

    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login Data:', loginData);

      // Simulating API call to authenticate the user
  //     this.http.post('YOUR_API_URL', loginData).pipe(
  //       catchError(err => {
  //         alert('Login failed, please check your credentials.');
  //         return of(null); // Handle API errors
  //       })
  //     ).subscribe(response => {
  //       if (response) {
  //         alert('Login successful!');
  //         this.router.navigate(['/home']); // Navigate to home page on success
  //       }
  //     });
  //   } else {
  //     alert('Please fill in all fields correctly.');
  //   }
  // }

  if (loginData.username === 'test@example.com' && loginData.password === 'password123') {
    // alert('Login successfully!');
    this.router.navigate(['/home']); // Navigate to home page
  } else {
    this.showError=true;
    this.errorMessage = 'Inavlid Credentials.';
  }
} else {
  this.showError = true;
  this.errorMessage = 'Please fill in all fields correctly.';
}
}
  // to check form field validity
  // get emailInvalid() {
  //   const emailControl = this.loginForm.get('email');
  //   return emailControl ? emailControl.invalid && (emailControl.touched || emailControl.dirty) : false;
  // }

  get passwordInvalid() {
    const passwordControl = this.loginForm.get('password');
    return passwordControl ? passwordControl.invalid && (passwordControl.touched || passwordControl.dirty) : false;
  }

  hideErrorBox(): void {
    this.showError = false;
}
}
