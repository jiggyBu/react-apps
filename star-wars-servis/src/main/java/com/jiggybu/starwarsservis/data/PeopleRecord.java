package com.jiggybu.starwarsservis.data;

import java.util.List;

import org.springframework.data.domain.Page;

import com.jiggybu.starwarsservis.jpa.entities.People;

public class PeopleRecord {
	
	private List<People> people;
	
	private int totalPages;
	
	private Long totalElements;
	
	private int currentPage;

	private PeopleRecord() {
		super();
	}
	
	public static PeopleRecord toPeopleRecord(Page<People> peoples) {
		
		PeopleRecord pr = new PeopleRecord();
		
		pr.people = peoples.getContent();
		
		pr.totalElements = peoples.getTotalElements();
		
		pr.totalPages = peoples.getTotalPages();
		
		pr.currentPage = peoples.getPageable().getPageNumber() + 1;
		
		return pr;
	}

	public List<People> getPeople() {
		return people;
	}

	public void setPeople(List<People> people) {
		this.people = people;
	}

	public int getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}

	public Long getTotalElements() {
		return totalElements;
	}

	public void setTotalElements(Long totalElements) {
		this.totalElements = totalElements;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	
	
	
}
