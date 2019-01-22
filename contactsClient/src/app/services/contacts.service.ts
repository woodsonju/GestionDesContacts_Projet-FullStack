import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(motCle: string, page: number, size: number) {
      return this.http.get<Contact>('http://localhost:8080/chercherContacts?mc='+motCle+'&page='+page+'&size='+size);
    }


  getContact(id: number) {
      return this.http.get<Contact>('http://localhost:8080/contacts/' + id)
  }

  saveContact(contact: any) {
      return this.http.post<Contact>('http://localhost:8080/contacts/save', contact);
  }

  updateContact(contact: Contact) {
      return this.http.put<Contact>('http://localhost:8080/contacts/update/'+ contact.id, contact)
  }

  deleteContact(id: number) {
      return this.http.delete<Contact>('http://localhost:8080/contacts/delete/'+ id)
  }


}
