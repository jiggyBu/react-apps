package com.jiggybu.starwarsservis.beans;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

public class PeopleSearchRequest {

	private static final int DEFAULT_PAGE_SIZE = 1;
	private static final Sort DEFAULT_SORT = new Sort(Direction.ASC, "name");
	
	private int page = 1;
	
	public Pageable getPageable() {
		return PageRequest.of(page - 1, DEFAULT_PAGE_SIZE, DEFAULT_SORT);
	}
	
	public int getPage() {
		return page;
	}
	
	public void setPage(int page) {
		this.page = page;
	}
	
	
}
