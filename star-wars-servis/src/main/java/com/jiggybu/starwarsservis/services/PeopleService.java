package com.jiggybu.starwarsservis.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jiggybu.starwarsservis.beans.PeopleSearchRequest;
import com.jiggybu.starwarsservis.jpa.entities.People;
import com.jiggybu.starwarsservis.jpa.repositories.PeopleRepository;
import com.jiggybu.starwarsservis.utils.SWSUtils;

@Service
public class PeopleService {
	
	@Autowired
	private PeopleRepository peopleRepository;
	
	@Transactional(readOnly=true)
	public Page<People> findAllPeople(PeopleSearchRequest searchRequest) {
				
		Page<People> peoples = peopleRepository.findAll(searchRequest.getPageable());
		
		if (peoples == null) return null;
		
		return peoples;
	}
	
	@Transactional
	public void addPerson(People people) {
		
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
	
	@Transactional
	public void removePerson(Long id) {
		
		if (id != null)
			peopleRepository.deleteById(id);
	}
	
	
}
