import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card shadow-sm p-4">
      <h2 class="mb-3">👥 User List</h2>
      <ul class="list-group" *ngIf="users.length > 0; else noUsers">
        <li *ngFor="let user of users; let i = index" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{{ user.name }}</strong><br />
            <small>{{ user.email }}</small>
          </div>
          <button class="btn btn-sm btn-danger" (click)="deleteUser(i)">Delete</button>
        </li>
      </ul>
      <ng-template #noUsers>
        <p class="text-muted">No users found. Please add some!</p>
      </ng-template>
    </div>
  `
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
