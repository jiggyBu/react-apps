package com.jiggybu.starwarsservis.web;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jiggybu.starwarsservis.jpa.entities.People;
import com.jiggybu.starwarsservis.services.PeopleService;
import com.jiggybu.starwarsservis.utils.RequestUrls;
import com.jiggybu.starwarsservis.utils.SWSUtils;

@RestController
@RequestMapping("/sws")
public class PeopleController {
	
	private static final Logger log = LoggerFactory.getLogger(PeopleController.class);
	
	@Autowired
	private PeopleService peopleService;
	
	@CrossOrigin
	@GetMapping(value=RequestUrls.PEOPLE)
	public ResponseEntity<List<People>> getAllPeople() {
		
		log.info("Getting all star wars people");
		
		List<People> peoples = peopleService.findAllPeople();		
		
		log.info("Total people: {}", peoples.size());
		
		return new ResponseEntity<List<People>>(peoples, HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping(value=RequestUrls.PEOPLE_ADD)
	public ResponseEntity<People> addPeople(@RequestBody People people) {		
				
		if (!SWSUtils.checkFieldIsNotNull(people)) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
		log.info("Adding new people to star wars");
		
		peopleService.addPeople(people);
		
		log.info("Added new people with name: {}", people.getName());
		
		return new ResponseEntity<People>(people, HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@GetMapping(value=RequestUrls.PEOPLE_REMOVE)
	public ResponseEntity<People> removePeople(@RequestParam Long id) {
		
		log.info("Removing person with id: {}", id);
		
		if (id == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
		peopleService.removePeople(id);
		
		log.info("Deleted people with id: {}", id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
	
}
