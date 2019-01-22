import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pagesContacts: any; 
  motCle: string='';
  currentPage : number=0;
  size : number=2;
  pages: Array<number>;


  constructor(private contactsService: ContactsService, private router: Router) { }


  ngOnInit() {
      
  }


  doSearch() {
    this.contactsService.getContacts(this.motCle, this.currentPage, this.size).subscribe(
        (data: any) => {
              this.pagesContacts = data;
              this.pages = new Array(data.totalPages);
          }, error1 => {
              console.log('erreur : ', error1);
          });
  }


  chercher() {
    this.doSearch();
  }


  gotoPage(i: number) {
      this.currentPage = i;
      this.doSearch();
  }


  onEditContact(id: number){
      this.router.navigate(['editContact', id]);
  }

  onDeleteContact(c: Contact){
      const confirm = window.confirm('Etes vous sûre de vouloir supprimer?')
      if(confirm ===true) {
        //Suppression coté back enf, dans la base de données
        this.contactsService.deleteContact(c.id).subscribe(
          data => {
              //suppression coté front (dans la liste des contacts), ici il supprime l'élement c
              this.pagesContacts.content.splice(
                 this.pagesContacts.content.indexOf(c), 1
              );
              console.log(data);
          }, error => {
              console.log(error);
          });
      }

  }


}
