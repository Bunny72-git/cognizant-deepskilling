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

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public List<Country> searchCountry(String text) {
        return countryRepository.findByNameContaining(text);
    }

    public List<Country> searchStartingWith(String text) {
        return countryRepository.findByNameStartingWith(text);
    }

    public List<Country> sortAscending() {
        return countryRepository.findAllByOrderByNameAsc();
    }

    public List<Country> sortDescending() {
        return countryRepository.findAllByOrderByNameDesc();
    }

    public Country firstCountry() {
        return countryRepository.findTopByOrderByNameAsc();
    }

    public Country lastCountry() {
        return countryRepository.findTopByOrderByNameDesc();
    }
}