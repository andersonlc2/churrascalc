package com.ac.churrascalc.domain.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ac.churrascalc.domain.dto.SuprimentoDTO;
import com.ac.churrascalc.domain.repository.SuprimentoRepository;

@Service
public class SuprimentoService {

	@Autowired
	private SuprimentoRepository repository;

	@Transactional(readOnly = true)
	public List<SuprimentoDTO> findAll() {
		return repository.findAll().stream().map(x -> new SuprimentoDTO(x)).collect(Collectors.toList());
	}
}