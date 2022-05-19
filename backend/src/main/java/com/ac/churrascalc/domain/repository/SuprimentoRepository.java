package com.ac.churrascalc.domain.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ac.churrascalc.domain.model.Suprimento;

@Repository
public interface SuprimentoRepository extends JpaRepository<Suprimento, Long> {

	Optional<Suprimento> findByNome(String nome);
}
