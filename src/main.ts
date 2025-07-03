import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddUserComponent } from './add-user.component';
import { UserListComponent } from './user-list.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'users', component: UserListComponent },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container mt-4">
      <h1 class="mb-4">User Management App</h1>
      <nav class="mb-3">
        <a routerLink="/" class="btn btn-outline-primary me-2">Home</a>
        <a routerLink="/add-user" class="btn btn-outline-success me-2">Add User</a>
        <a routerLink="/users" class="btn btn-outline-info">User List</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())]
});
