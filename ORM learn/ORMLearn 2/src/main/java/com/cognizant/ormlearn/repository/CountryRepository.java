package com.cognizant.ormlearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cognizant.ormlearn.entity.Country;

public interface CountryRepository extends JpaRepository<Country, String> {
}