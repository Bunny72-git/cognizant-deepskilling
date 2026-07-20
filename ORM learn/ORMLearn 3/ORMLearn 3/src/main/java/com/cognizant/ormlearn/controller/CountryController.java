package com.cognizant.ormlearn.controller;

import com.cognizant.ormlearn.entity.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping
    public List<Country> getAll() {
        return countryService.getAllCountries();
    }

    @GetMapping("/contains/{text}")
    public List<Country> contains(@PathVariable String text) {
        return countryService.searchCountry(text);
    }

    @GetMapping("/starts/{text}")
    public List<Country> starts(@PathVariable String text) {
        return countryService.searchStartingWith(text);
    }

    @GetMapping("/asc")
    public List<Country> asc() {
        return countryService.sortAscending();
    }

    @GetMapping("/desc")
    public List<Country> desc() {
        return countryService.sortDescending();
    }

    @GetMapping("/first")
    public Country first() {
        return countryService.firstCountry();
    }

    @GetMapping("/last")
    public Country last() {
        return countryService.lastCountry();
    }
}