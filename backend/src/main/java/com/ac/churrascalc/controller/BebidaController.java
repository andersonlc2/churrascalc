package com.ac.churrascalc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ac.churrascalc.domain.dto.BebidaDTO;
import com.ac.churrascalc.domain.service.BebidaService;

@RestController
@RequestMapping("/bebidas")
public class BebidaController {

	@Autowired
	private BebidaService service;

	@GetMapping
	public List<BebidaDTO> listAll() {
		return service.findAll();
	}
}
