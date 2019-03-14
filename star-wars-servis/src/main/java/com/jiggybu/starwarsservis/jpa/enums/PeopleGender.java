package com.jiggybu.starwarsservis.jpa.enums;

public enum PeopleGender {

	Male("m"),
	Female("f");
	
	private final String alias;
	
	private PeopleGender(String alias) {
		this.alias = alias;
	}
	
	public String getAlias() {
		return alias;
	}
	
}
