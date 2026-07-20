package com.cognizant.ormlearn;

import com.cognizant.ormlearn.entity.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {
        testAddCountry();
    }

    private void testAddCountry() {

        Country country = new Country("NP", "Nepal");

        countryService.addCountry(country);

        Country result = countryService.findCountryByCode("NP");

        System.out.println(result);
    }
}