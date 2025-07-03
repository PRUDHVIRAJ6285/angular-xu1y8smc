import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card shadow-sm p-4">
      <h2 class="mb-3">➕ Add New User</h2>
      <form (ngSubmit)="addUser()" #userForm="ngForm">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            [(ngModel)]="user.name"
            class="form-control"
            required
            #name="ngModel"
          />
          <div class="text-danger" *ngIf="name.invalid && name.touched">
            Name is required.
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            [(ngModel)]="user.email"
            class="form-control"
            required
            #email="ngModel"
          />
          <div class="text-danger" *ngIf="email.invalid && email.touched">
            Valid email is required.
          </div>
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">
          Save User
        </button>
      </form>
    </div>
  `
})
export class AddUserComponent {
  user = {
    name: '',
    email: ''
  };

  constructor(private router: Router) {}

  addUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User added successfully!');
    this.router.navigate(['/users']);
  }
}

