package com.ac.churrascalc.domain.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ac.churrascalc.domain.model.Acompanha;

@Repository
public interface AcompanhaRepository extends JpaRepository<Acompanha, Long> {

	Optional<Acompanha> findByNome(String nome);
}
