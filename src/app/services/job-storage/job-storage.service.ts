import { Injectable } from '@angular/core';
import { JobApplication } from '../../models/job-application.interface';


@Injectable({
  providedIn: 'root',
})
export class JobStorageService {
  private readonly localStorageKey = 'jobApplications';

  // Save data to local storage
  saveApplication(data: JobApplication): void {
    const currentData = this.getApplications();
    currentData.push(data);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentData));
  }

  // Retrieve data from local storage
  getApplications(): JobApplication[] {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  // Clear all saved applications
  clearApplications(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  // Delete an application by index
  deleteApplication(index: number): void {
    const currentData = this.getApplications();
    if (index >= 0 && index < currentData.length) {
      currentData.splice(index, 1); // Remove the application at the specified index
      localStorage.setItem(this.localStorageKey, JSON.stringify(currentData)); // Update local storage
    }
  }

}
