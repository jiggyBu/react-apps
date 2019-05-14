package com.jiggybu.starwarsservis.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jiggybu.starwarsservis.beans.PeopleSearchRequest;
import com.jiggybu.starwarsservis.data.PeopleRecord;
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
	@RequestMapping(value=RequestUrls.PEOPLE, method=RequestMethod.GET)	
	public ResponseEntity<PeopleRecord> getAllPeople(@ModelAttribute PeopleSearchRequest searchRequest) {
				
		log.info("Getting all star wars people");
		
		Page<People> peoples = peopleService.findAllPeople(searchRequest);
		
		PeopleRecord peopleRecord = PeopleRecord.toPeopleRecord(peoples);
		
		log.info("Total people: {}", peopleRecord.getTotalElements());		
		
		return new ResponseEntity<PeopleRecord>(peopleRecord, HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value=RequestUrls.PEOPLE_ADD, method=RequestMethod.POST)
	public ResponseEntity<People> addPeople(@RequestBody People people) {
		
		if (!SWSUtils.checkFieldIsNotNull(people)) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
		log.info("Adding new person to star wars world");
		
		peopleService.addPerson(people);
		
		log.info("Added new person with name: {}", people.getName());				
		
		return new ResponseEntity<People>(people, HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@RequestMapping(value=RequestUrls.PEOPLE_REMOVE, method=RequestMethod.DELETE)
	public ResponseEntity<Long> removePeople(@RequestParam Long id) {
		
		log.info("Removing person with id: {}", id);
		
		if (id == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
		peopleService.removePerson(id);
		
		log.info("Removed person with id: {}", id);
		
		return new ResponseEntity<Long>(id, HttpStatus.OK);
	}
	
	
}
