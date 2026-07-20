package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {

    // JPQL
    @Query("SELECT c FROM Country c")
    List<Country> getAllCountries();

    @Query("SELECT c FROM Country c WHERE c.name LIKE %?1%")
    List<Country> searchCountry(String text);

    @Query("SELECT COUNT(c) FROM Country c")
    long countCountries();

    // Native SQL
    @Query(value = "SELECT * FROM country", nativeQuery = true)
    List<Country> getAllCountriesNative();

    @Query(value = "SELECT * FROM country WHERE co_name LIKE %?1%", nativeQuery = true)
    List<Country> searchCountryNative(String text);
}