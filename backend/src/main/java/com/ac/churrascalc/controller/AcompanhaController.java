package com.ac.churrascalc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ac.churrascalc.domain.dto.AcompanhaDTO;
import com.ac.churrascalc.domain.service.AcompanhaService;

@RestController
@RequestMapping("/acompanhamentos")
public class AcompanhaController {

	@Autowired
	private AcompanhaService service;

	@GetMapping
	public List<AcompanhaDTO> listAll() {
		return service.findAll();
	}
}
