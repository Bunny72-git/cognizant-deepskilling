package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.entity.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repository;

    public List<Country> getCountriesJPQL() {
        return repository.getAllCountries();
    }

    public List<Country> searchJPQL(String text) {
        return repository.searchCountry(text);
    }

    public long countCountries() {
        return repository.countCountries();
    }

    public List<Country> getCountriesNative() {
        return repository.getAllCountriesNative();
    }

    public List<Country> searchNative(String text) {
        return repository.searchCountryNative(text);
    }
}