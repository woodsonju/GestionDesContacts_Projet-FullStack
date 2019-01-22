import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact: Contact = new Contact();
  mode: number=1;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactsService.saveContact(this.contact)
        .subscribe(
            (data: Contact) => {
                this.contact = data;
                console.log(data);
                this.mode=2;
            }, (error) => {
                console.log(error);
            });
  }

}
