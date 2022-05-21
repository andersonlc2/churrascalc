package com.ac.churrascalc.domain.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ac.churrascalc.domain.dto.AcompanhaDTO;
import com.ac.churrascalc.domain.repository.AcompanhaRepository;

@Service
public class AcompanhaService {

	@Autowired
	private AcompanhaRepository repository;

	@Transactional(readOnly = true)
	public List<AcompanhaDTO> findAll() {
		return repository.findAll().stream().map(x -> new AcompanhaDTO(x, 0, 0)).collect(Collectors.toList());
	}
}