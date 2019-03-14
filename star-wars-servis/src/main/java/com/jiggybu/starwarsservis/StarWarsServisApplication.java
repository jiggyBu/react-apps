package com.jiggybu.starwarsservis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages="com.jiggybu.starwarsservis.jpa")
@EnableJpaRepositories
public class StarWarsServisApplication {

	public static void main(String[] args) {
		SpringApplication.run(StarWarsServisApplication.class, args);
	}

}
