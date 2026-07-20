package com.cognizant.ormlearn.controller;

import com.cognizant.ormlearn.entity.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/country")
public class CountryController {

    @Autowired
    private CountryService service;

    @GetMapping("/jpql")
    public List<Country> jpql() {
        return service.getCountriesJPQL();
    }

    @GetMapping("/native")
    public List<Country> nativeQuery() {
        return service.getCountriesNative();
    }

    @GetMapping("/search/{name}")
    public List<Country> search(@PathVariable String name) {
        return service.searchJPQL(name);
    }

    @GetMapping("/count")
    public long count() {
        return service.countCountries();
    }
}