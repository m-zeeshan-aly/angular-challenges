import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { passwordMatchValidator } from "../validator/password-match.validator";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @Input() public isFlipped = false;

  public toggleToLogin(): void {
    console.log('login');
    this.isFlipped = true;
  }

  public toggleToSignUp(): void {
    console.log('login');
    this.isFlipped = false;
  }

  // signUp: FormGroup = new FormGroup({
  //   name: new FormControl(""),
  //   email: new FormControl("",[Validators.required, Validators.email]),
  //   phone: new FormControl(""),
  //   dob: new FormControl(""),
  //   gender: new FormControl(""),
  //   address: new FormControl(""),
  //   country: new FormControl("Country"),
  //   city: new FormControl(""),
  //   region: new FormControl(""),
  //   postalCode: new FormControl(""),
  //   password1: new FormControl(""),
  //   password2: new FormControl(""),

  // });



  signUp: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required, // Name is required
        Validators.minLength(3), // Minimum 3 characters
        Validators.maxLength(20), // Maximum 50 characters
      ]),
      email: new FormControl('', [
        Validators.required, // Email is required
        Validators.email, // Must be a valid email format
      ]),
      phone: new FormControl('', [
        Validators.required, // Phone number is required
        Validators.pattern(/^\d{10,15}$/), // Only digits allowed (10-15 digits)
      ]),
      dob: new FormControl('', [
        Validators.required, // Date of birth is required
      ]),
      gender: new FormControl('', [
        Validators.required, // Gender is required
      ]),
      address: new FormControl('', [
       // Address is required
        Validators.minLength(10), // Minimum 10 characters
        Validators.maxLength(100), // Maximum 100 characters
      ]),
      country: new FormControl('Country', [
        Validators.required, // Country is required
      ]),
      city: new FormControl('', [
        // City is required
        Validators.minLength(2), // Minimum 2 characters
        Validators.maxLength(50), // Maximum 50 characters
      ]),
      region: new FormControl('', [
        Validators.required, // Region is required
      ]),
      postalCode: new FormControl('', [
        Validators.required, // Postal code is required
        Validators.pattern(/^\d{4,10}$/), // Only digits allowed (4-10 digits)
      ]),
      password1: new FormControl('', [
        Validators.required, // Password is required
        Validators.minLength(8), // Minimum 8 characters
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ), // Must contain uppercase, lowercase, number, special character
      ]),
      password2: new FormControl('', [
        Validators.required, // Confirmation password is required
      ]),
    },
    { validators: passwordMatchValidator }
  );

  // Custom validator for password matching
  signIn: FormGroup = new FormGroup({
    email: new FormControl(''),

    password: new FormControl(''),
  });

  onSignupSubmit(): void {
    console.log(this.signUp.value);
    const formData = this.signUp.value;
    this.signUp.reset(); // Reset form
  }

  onSigninSubmit(): void {
    console.log(this.signIn.value);
    console.log(this.signUp.value);
    const formData = this.signUp.value;
    this.signUp.reset(); // Reset form
  }
}
