import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactCardComponent } from '../contact-card/contact-card.component';
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
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  imports: [ContactCardComponent, CommonModule]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  selectedContact: Contact | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Contact[]>('assets/contacts.json').subscribe(data => {
      this.contacts = data;
      this.filteredContacts = data;
      if (this.filteredContacts.length > 0) {
        this.selectedContact = this.filteredContacts[0];
      }
    });
  }

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredContacts = this.contacts.filter(contact =>
      `${contact.firstName} ${contact.lastName} ${contact.cellNumber}`.toLowerCase().includes(query)
    );
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  getInitials(contact: Contact): string {
    return `${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}`;
  }

  

}
