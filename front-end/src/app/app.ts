import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CRM Pro');

  /**
   * Set `showSidebar` to `true` whenever you want to display the sidebar and mobile topbar.
   * Currently set to `false` so the main content takes the full screen.
   */
  showSidebar = signal(false);
  sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
