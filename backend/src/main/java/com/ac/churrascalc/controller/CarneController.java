package com.ac.churrascalc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ac.churrascalc.domain.model.Carne;
import com.ac.churrascalc.domain.service.CarneService;

@RestController
@RequestMapping("/carnes")
public class CarneController {

	@Autowired
	private CarneService service;

	@GetMapping
	public List<Carne> listAll() {
		return service.findAll();
	}
}
