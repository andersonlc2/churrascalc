package com.ac.churrascalc.domain.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ac.churrascalc.domain.model.Bebida;

@Repository
public interface BebidaRepository extends JpaRepository<Bebida, Long> {

	Optional<Bebida> findByNome(String nome);
}
