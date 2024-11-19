import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  progressValue: number = 0;

  getProgressBarClass(): string {
    if (this.progressValue <= 30) {
      return 'danger'; // Red for 0-30%
    } else if(this.progressValue==100){
      return "congrats"
    }
    else if (this.progressValue <= 60) {
      return 'warning'; // Yellow for 31-60%
    } else {
      return 'success'; // Green for 61-100%
    }
  }

  updateProgress(): void {
    if (this.progressValue < 100) {
      this.progressValue += 10; // Increment by 10 each time
    } else {
      this.progressValue = 0; // Reset to 0 if it reaches 100
    }
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = `${this.progressValue}%`;
    }
  }

}
