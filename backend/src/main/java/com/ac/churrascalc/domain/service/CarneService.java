package com.ac.churrascalc.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ac.churrascalc.domain.model.Carne;
import com.ac.churrascalc.domain.repository.CarneRepository;

@Service
public class CarneService {

	@Autowired
	private CarneRepository carneRepository;

	public List<Carne> findAll() {
		return carneRepository.findAll();
	}
}
