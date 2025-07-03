import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card shadow-sm p-4">
      <h2 class="text-center">🏠 Home Page</h2>
      <p class="text-center">Welcome to the <strong>User Management App</strong>!</p>
      <p class="text-center text-muted">Use the navigation buttons above to add or view users.</p>
    </div>
  `
})
export class HomeComponent {}