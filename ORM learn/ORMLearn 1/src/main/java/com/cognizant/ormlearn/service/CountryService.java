package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.entity.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;


    public Country findCountryByCode(String code) throws CountryNotFoundException {

        Country country = countryRepository.findById(code).orElse(null);

        if(country == null) {
            throw new CountryNotFoundException("Country not found");
        }

        return country;
    }
}