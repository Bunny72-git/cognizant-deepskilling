package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {

    // Search by containing text
    List<Country> findByNameContaining(String text);

    // Search by starting text
    List<Country> findByNameStartingWith(String text);

    // Sort by name ascending
    List<Country> findAllByOrderByNameAsc();

    // Sort by name descending
    List<Country> findAllByOrderByNameDesc();

    // First country alphabetically
    Country findTopByOrderByNameAsc();

    // Last country alphabetically
    Country findTopByOrderByNameDesc();
}