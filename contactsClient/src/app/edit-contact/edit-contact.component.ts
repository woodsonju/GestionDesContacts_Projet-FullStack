import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  contact: Contact = new Contact();
  idContact: number;

  /*
    L'objet ActivatedRoute permet d'acceder au paramètre de la route :
    activatedRoute.snapshot.params['id']. 
    snapshot  contient les paramètres de l'URL, 
    ici on attribut le paramètre id
  */
  constructor(private contactsService: ContactsService,
            private activatedRoute: ActivatedRoute,
            private router: Router) { 
                //Recupération du paramètre id
            this.idContact = activatedRoute.snapshot.params['id'];
            }

  ngOnInit() {

    //Va permettre de récuperer le contacte de l'id afin de le mettre à jour
    this.contactsService.getContact(this.idContact).subscribe(
        data => {
            this.contact=data;
            console.log(data);
        }, error => {
            console.log(error);
        });
  }
    
    
  updateContact() {
      this.contactsService.updateContact(this.contact).subscribe(
        (data : Contact) => {
            console.log(data);
            alert('Mise à jour effectuée');
            this.router.navigate(['contacts'])
        }, error=> {
            console.log(error);
            alert('Problème')
        });
  }


}
