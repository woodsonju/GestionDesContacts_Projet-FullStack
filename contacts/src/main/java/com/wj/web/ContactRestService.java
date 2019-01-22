package com.wj.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wj.dao.ContactRepository;
import com.wj.dao.entities.Contact;

@RestController
@CrossOrigin("*")
public class ContactRestService {
	
	@Autowired
	private ContactRepository contactRepository;
	
	@RequestMapping(value="/contacts", method=RequestMethod.GET)
	public List<Contact> getContacts() {
		return contactRepository.findAll();
	}
	
	//@PathVariable indique que le paramètre d'une méthode est lié à l'URI
	@RequestMapping(value="/contacts/{id}", method=RequestMethod.GET)
	public Contact getContact(@PathVariable Long id) {
		return contactRepository.findOne(id);
	}
	
	@RequestMapping(value="/chercherContacts", method=RequestMethod.GET)
	public Page<Contact> chercher(
			@RequestParam(name="mc", defaultValue="")String mc, 
			@RequestParam(name="page", defaultValue="0")int page, 
			@RequestParam(name="size", defaultValue="3")int size){

		return contactRepository.chercher("%"+mc+"%", new PageRequest(page, size));
	}
	
	
	/*
	 * Ici il recupère la requête http en  format json et le stock 
	 * ensuite dans l'objet contact
	 */
	@RequestMapping(value="/contacts/save", method=RequestMethod.POST)
	public Contact saveContact(@RequestBody Contact c) {
		return contactRepository.save(c);
	}
	
	@RequestMapping(value="/contacts/delete/{id}", method=RequestMethod.DELETE)
	public void deleteContact(@PathVariable Long id) {
		contactRepository.delete(id);
	}
	
	/*
	 * Je mets à jour le contact dont l'id est connu
	 */
	@RequestMapping(value="/contacts/update/{id}", method=RequestMethod.PUT)
	public void updateContact(@RequestBody Contact c, @PathVariable Long id) {
		c.setId(id);
		contactRepository.save(c);
	}
}
