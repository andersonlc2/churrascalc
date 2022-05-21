package com.ac.churrascalc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ac.churrascalc.domain.dto.SuprimentoDTO;
import com.ac.churrascalc.domain.service.SuprimentoService;

@RestController
@RequestMapping("/suprimentos")
public class SuprimentoController {

	@Autowired
	private SuprimentoService service;

	@GetMapping
	public List<SuprimentoDTO> listAll() {
		return service.findAll();
	}
}
