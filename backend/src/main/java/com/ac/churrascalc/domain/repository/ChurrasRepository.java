package com.ac.churrascalc.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ac.churrascalc.domain.model.Churrasco;

@Repository
public interface ChurrasRepository extends JpaRepository<Churrasco, Long> {

}
