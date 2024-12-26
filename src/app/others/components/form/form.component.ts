import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { JobStorageService } from '../../../services/job-storage/job-storage.service';
import { JobApplication } from '../../../models/job-application.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  jobForm: any;
  showSuccessAlert: boolean = false;
  educationLevels: string[] = [
    'High School',
    "Bachelor's",
    "Master's",
    'PhD',
    'Other'
  ];
  skillTypes: string[] = ['Technical', 'Soft Skill', 'Language', 'Tool']; // Example skill types

  constructor(private fb: FormBuilder,
    private jobStorageService: JobStorageService,
    private router: Router)
    {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.jobForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        city: ['', [Validators.required]]
      }),
      educationArray: this.fb.array([this.createEducationFormGroup()]),
      skills: this.fb.array([this.createSkillGroup()]), // Updated to include skill group
      experience: ['', [Validators.required, Validators.min(0)]],
      joinTime: ['', [Validators.required, Validators.min(1)]],
      acceptTerms: [false, Validators.requiredTrue],
      showDetails: false,
    });
  }

  // Create a form group for a single education entry
  createEducationFormGroup(): FormGroup {
    return this.fb.group({
      level: ['', Validators.required],
      instituteName: ['', Validators.required],
      degreeName: ['', Validators.required],
      grade: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  // Create a form group for a single skill entry
  createSkillGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      proficiency: ['', Validators.required],
      experience: [
        '',
        [Validators.required, Validators.min(0), Validators.max(50)]
      ]
    });
  }

  // Getters for FormArray
  get educationArray(): FormArray {
    return this.jobForm.get('educationArray') as FormArray;
  }

  get skills(): FormArray {
    return this.jobForm.get('skills') as FormArray;
  }

  // Add a new education entry
  addEducation() {
    this.educationArray.push(this.createEducationFormGroup());
  }

  // Remove an education entry
  removeEducation(index: number) {
    if (this.educationArray.length > 1) {
      this.educationArray.removeAt(index);
    }
  }

  // Add a new skill entry
  addSkill() {
    this.skills.push(this.createSkillGroup());
  }

  // Remove a skill entry
  removeSkill(index: number) {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }



  onSubmit() {
  if (this.jobForm.valid) {
    const application: JobApplication = this.jobForm.value;
    this.jobStorageService.saveApplication(application);

    // Show success alert
    this.showSuccessAlert = true;
    this.jobForm.reset();
    setTimeout(() => {
      this.showSuccessAlert = false; // Hide the alert after 3 seconds
      this.router.navigate(["others"]); // Navigate after the alert disappears
    }, 3000);
  } else {
    this.markFormGroupTouched(this.jobForm);
  }
}


  // Mark all form controls as touched to display errors
  markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  // Generate error messages for form fields
  getErrorMessage(control: any, fieldName: string): string {
    if (control.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (control.hasError('email')) {
      return 'Invalid email format';
    }
    if (control.hasError('pattern')) {
      return 'Invalid format';
    }
    if (control.hasError('min')) {
      return `${fieldName} must be greater than ${control.errors.min.min}`;
    }
    if (control.hasError('max')) {
      return `${fieldName} must be less than ${control.errors.max.max}`;
    }
    return '';
  }
}
