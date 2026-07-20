package com.cognizant.ormlearn.dao;

import com.cognizant.ormlearn.entity.Country;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CountryDao {

    @PersistenceContext
    private EntityManager entityManager;

    // Fetch all countries using Criteria Query
    public List<Country> getAllCountries() {

        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Country> criteriaQuery = criteriaBuilder.createQuery(Country.class);

        Root<Country> root = criteriaQuery.from(Country.class);

        criteriaQuery.select(root);

        TypedQuery<Country> query = entityManager.createQuery(criteriaQuery);

        return query.getResultList();
    }

    // Search country by name using Criteria Query
    public List<Country> searchCountry(String name) {

        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Country> criteriaQuery = criteriaBuilder.createQuery(Country.class);

        Root<Country> root = criteriaQuery.from(Country.class);

        criteriaQuery.select(root)
                .where(criteriaBuilder.like(root.get("name"), "%" + name + "%"));

        TypedQuery<Country> query = entityManager.createQuery(criteriaQuery);

        return query.getResultList();
    }
}