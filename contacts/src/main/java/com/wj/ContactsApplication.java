package com.wj;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.wj.dao.ContactRepository;
import com.wj.dao.entities.Contact;

@SpringBootApplication
public class ContactsApplication implements CommandLineRunner{

	@Autowired
	ContactRepository contactRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ContactsApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		
		/*
		 * Pour spécifier la valeur d'une date on crée un objet DateFormat
		 * 
		 */
		/*DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		contactRepository.save(new Contact("JUSTE", "Mathéo", df.parse("2018-02-07") , "matheo@gmail.com", "0625364856", "matheo.jpeg"));
		contactRepository.save(new Contact("JUSTE", "Louis", df.parse("2013-02-13") , "louis@gmail.com", "0665364725", "louis.jpeg"));
		contactRepository.save(new Contact("JUSTE", "Woodson", df.parse("1984-05-18") , "woodson@gmail.com", "0685426414", "woodson.jpeg"));
		contactRepository.save(new Contact("SALANSON", "Flora", df.parse("1994-03-06") , "flora@gmail.com", "0675436842", "flora.jpeg"));
		contactRepository.save(new Contact("Trujillo", "Aurore", df.parse("1988-10-02") , "aurore@gmail.com", "0648766234", "aurore.jpeg"));
		
		contactRepository.findAll().forEach(c -> {
			System.out.println(c);
		});
		*/
	}

}

