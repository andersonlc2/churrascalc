package com.ac.churrascalc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ac.churrascalc.domain.dto.ChurrasDTO;
import com.ac.churrascalc.domain.service.ChurrasService;

@RestController
@RequestMapping("/churras")
public class ChurrasController {

	@Autowired
	private ChurrasService service;

	@GetMapping("/{id}")
	public ChurrasDTO findChurras(@PathVariable Long id) {
		return service.findChurras(id);
	}
}
