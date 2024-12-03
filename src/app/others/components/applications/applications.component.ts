import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../../../models/job-application.interface';
import { JobStorageService } from '../../../services/job-storage/job-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent implements OnInit {
  applications: JobApplication[] = [];

  constructor(private jobStorageService: JobStorageService) {}

  ngOnInit(): void {
    this.applications = this.jobStorageService.getApplications();
  }

  toggleDetails(application: any): void {
    application.showDetails = !application.showDetails;
  }



// Load applications from service
  loadApplications(): void {
    this.applications = this.jobStorageService.getApplications();
  }
// Delete an application by index

  deleteApplication(index: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.jobStorageService.deleteApplication(index); // Call service to delete from storage
      this.loadApplications(); // Refresh the local array
    }
  }

  clearAllApplications(): void {
  if (confirm('Are you sure you want to clear all applications? This action cannot be undone.')) {
    this.jobStorageService.clearApplications(); // Clear all applications from local storage
    this.loadApplications(); // Refresh the local array to update the UI
  }
}
}


