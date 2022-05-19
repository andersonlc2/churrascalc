package com.ac.churrascalc.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ac.churrascalc.domain.model.Carne;

@Repository
public interface CarneRepository extends JpaRepository<Carne, Long> {

	List<Carne> findByChurras_id(Long churras_id);
}
