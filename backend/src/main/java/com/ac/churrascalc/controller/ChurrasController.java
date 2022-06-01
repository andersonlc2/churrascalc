package com.ac.churrascalc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ac.churrascalc.domain.dto.ChurrasDTO;
import com.ac.churrascalc.domain.service.ChurrasService;

@RestController
@RequestMapping("/churras")
public class ChurrasController {

	@Autowired
	private ChurrasService service;

	@PutMapping("/calcular")
	public ChurrasDTO findChurras(@RequestBody ChurrasDTO churras) {
		return service.calcular(churras);
	}
}
