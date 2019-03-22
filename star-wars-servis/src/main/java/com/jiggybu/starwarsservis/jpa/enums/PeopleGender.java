package com.jiggybu.starwarsservis.jpa.enums;

public enum PeopleGender {

	MALE	("m", "Male"),
	FEMALE	("f", "Female");
	
	public static final String MALE_ALIAS 	= "m";
	public static final String FEMALE_ALIAS	= "f";
	
	public static final String MALE_PREVIEW_NAME 	= "Male";
	public static final String FEMALE_PREVIEW_NAME 	= "Female";
	
	private final String alias;
	private final String previewName;
	
	private PeopleGender(String alias, String previewName) {
		this.alias = alias;
		this.previewName = previewName;
	}
	
	public String getAlias() {
		return alias;
	}
	
	public String getPreviewName() {
		return previewName;
	}
	
}
