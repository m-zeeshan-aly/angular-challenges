import { Component, inject, OnInit, Output, EventEmitter  } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-registered-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registered-users.component.html',
  styleUrl: './registered-users.component.scss',
  // animations: [
  //   trigger('fadeSlideInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateY(20px)' }),
  //       animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  //     ]),
  //     transition(':leave', [
  //       animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
  //     ])
  //   ])
  // ]
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ transform: 'scale(0.95)', opacity: 0 }))
      ])
    ])
  ]
})
export class RegisteredUsersComponent implements OnInit {

  userApiService = inject(UserApiService)
  public data : any ;
  public usersArray : any[] = []
  isLoading = false;

  fetchUsers() {
    this.isLoading = true;
    this.userApiService.getUsers().subscribe({
      next: (users) => {
        console.log('Fetched users:', users);
        this.data=users
        this.usersArray = this.data.data
        this.isLoading = false;
        // this.usersArray=[]
        console.log(this.usersArray)
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.isLoading = false;
      }
    });
  }
  ngOnInit(): void {
    this.fetchUsers();
    // console.log('Initial usersArray:', this.usersArray); // Log here
  }

  @Output() deleteUser = new EventEmitter<any>();


  gradients = [
    'linear-gradient(135deg, #6366f1, #a855f7)',
    'linear-gradient(135deg, #14b8a6, #0ea5e9)',
    'linear-gradient(135deg, #f43f5e, #f97316)',
    'linear-gradient(135deg, #8b5cf6, #ec4899)'
  ];

  getGradient(index: number): string {
    return this.gradients[index % this.gradients.length];
  }

  onDelete(user: any, event: Event): void {
    event.stopPropagation();
    this.deleteUser.emit(user);
  }
}





