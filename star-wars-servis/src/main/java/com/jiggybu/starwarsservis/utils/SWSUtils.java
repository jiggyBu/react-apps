package com.jiggybu.starwarsservis.utils;

import com.jiggybu.starwarsservis.jpa.entities.People;

public class SWSUtils {

	public static boolean checkFieldIsNotNull(People people) {
		
		if (people == null || people.getId() == null || people.getName() == null) {
			return false;
		}
		
		return true;
	}
	
}
