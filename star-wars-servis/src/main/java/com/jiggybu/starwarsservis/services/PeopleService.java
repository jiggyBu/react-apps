package com.jiggybu.starwarsservis.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jiggybu.starwarsservis.jpa.entities.People;
import com.jiggybu.starwarsservis.jpa.repositories.PeopleRepository;
import com.jiggybu.starwarsservis.utils.SWSUtils;

@Service
public class PeopleService {

	@Autowired
	private PeopleRepository peopleRepository;
	
	@Transactional(readOnly=true)
	public List<People> findAllPeople() {
		
		List<People> peoples = peopleRepository.findAll();
		
		if (peoples == null) return null;
		
		return peoples;
	}
	
	@Transactional
	public void addPeople(People people) {
		
		if (!SWSUtils.checkFieldIsNotNull(people)) return;
		
		People newPeople = new People(people.getName());
		
		if (people.getEyeColor() != null) {
			newPeople.setEyeColor(people.getEyeColor());
		}
		
		if (people.getHairColor() != null) {
			newPeople.setHairColor(people.getHairColor());
		}
		
		if (people.getGender() != null) {
			newPeople.setGender(people.getGender());
		}
		
		peopleRepository.save(newPeople);
	}
	
}
