package com.jiggybu.starwarsservis.jpa.converters;

import java.util.Objects;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import com.jiggybu.starwarsservis.jpa.enums.PeopleGender;

@Converter
public class PeopleGenderConverter implements AttributeConverter<PeopleGender, String> {
	
	private static final PeopleGender[] ALL = PeopleGender.values();
	
	@Override
	public String convertToDatabaseColumn(PeopleGender attr) {
		return attr == null ? null : attr.getAlias();
	}

	@Override
	public PeopleGender convertToEntityAttribute(String dbData) {
		
		for (PeopleGender pg : ALL) {
			if (Objects.equals(dbData, pg.getAlias()))
				return pg;
		}
		
		return null;
	}

	
	
}
