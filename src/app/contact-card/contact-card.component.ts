// contact-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  cellNumber: string;
  bio: string;
}

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() contact!: Contact;
}