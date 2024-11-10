import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';  // Add these imports

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],  // Add RouterLink and RouterLinkActive to imports
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}