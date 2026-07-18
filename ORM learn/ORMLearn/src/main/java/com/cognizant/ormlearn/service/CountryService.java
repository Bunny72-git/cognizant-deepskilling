package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.entity.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Find a country by code
    public Country getCountry(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    // Add a new country
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    // Update an existing country
    public Country updateCountry(Country country) {
        return countryRepository.save(country);
    }

    // Delete a country by code
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    // Find countries by partial name
    public List<Country> searchCountry(String name) {
        return countryRepository.findByNameContainingIgnoreCase(name);
    }
}