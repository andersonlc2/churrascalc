package com.ac.churrascalc.domain.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ac.churrascalc.domain.dto.BebidaDTO;
import com.ac.churrascalc.domain.repository.BebidaRepository;

@Service
public class BebidaService {

	@Autowired
	private BebidaRepository repository;

	@Transactional(readOnly = true)
	public List<BebidaDTO> findAll() {
		return repository.findAll().stream().map(x -> new BebidaDTO(x)).collect(Collectors.toList());
	}
}