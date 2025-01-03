import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-doc-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxSpinnerModule],
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DocLoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  showError: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      // Show the spinner
      this.spinner.show();

      this.http.post<any>('https://gac-api.fit-infotech.com/api/Auth/login', loginData).subscribe({
        next: (response) => {
          // Hide the spinner
          this.spinner.hide();

          if (response.status) {
            this.router.navigate(['/home']);
          } else {
            this.showError = true;
            this.errorMessage = response.errorMessage || 'Invalid credentials.';
          }
        },
        error: (error: HttpErrorResponse) => {
          // Hide the spinner
          this.spinner.hide()

          this.showError = true;
          this.errorMessage =
            error.error.errorMessage || 'An error occurred. Please try again later.';
        }
      });
    } else {
      this.showError = true;
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  get passwordInvalid() {
    const passwordControl = this.loginForm.get('password');
    return passwordControl ? passwordControl.invalid && (passwordControl.touched || passwordControl.dirty) : false;
  }

  hideErrorBox(): void {
    this.showError = false;
  }


}