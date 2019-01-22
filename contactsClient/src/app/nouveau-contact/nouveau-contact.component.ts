import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  mode: number=1;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }
  
  /*
    dataForm represente les données saisies dans le formulaire
  */
  onSaveContact(dataForm: NgForm) {
      this.contactsService.saveContact(dataForm).subscribe(
          data => {
            console.log(data);
            this.mode=2;
          }, error => {
              //Si on veut afficher le message de l'exception
              console.log(JSON.parse(error._body).message);
          });

  }

}
