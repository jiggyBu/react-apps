package com.jiggybu.starwarsservis.jpa.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.jiggybu.starwarsservis.jpa.converters.PeopleGenderConverter;
import com.jiggybu.starwarsservis.jpa.enums.PeopleGender;

@Entity
@Table(schema="star_wars", name="people")
public class People implements Serializable {

	private static final long serialVersionUID = -6698989995094833940L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private String name;
	
	@Column(name="haircolor")
	private String hairColor;
	
	@Column(name="eyecolor")
	private String eyeColor;
	
	@Column
	@Convert(converter=PeopleGenderConverter.class)
	private PeopleGender gender;

	public People() {
		super();
	}
	
	public People(String name) {
		super();
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHairColor() {
		return hairColor;
	}

	public void setHairColor(String hairColor) {
		this.hairColor = hairColor;
	}

	public String getEyeColor() {
		return eyeColor;
	}

	public void setEyeColor(String eyeColor) {
		this.eyeColor = eyeColor;
	}

	public PeopleGender getGender() {
		return gender;
	}

	public void setGender(PeopleGender gender) {
		this.gender = gender;
	} 
	
	
	
}
