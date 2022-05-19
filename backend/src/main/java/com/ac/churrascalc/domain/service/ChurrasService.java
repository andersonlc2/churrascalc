package com.ac.churrascalc.domain.service;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ac.churrascalc.domain.dto.CarneDTO;
import com.ac.churrascalc.domain.dto.ChurrasDTO;
import com.ac.churrascalc.domain.repository.CarneRepository;
import com.ac.churrascalc.domain.repository.ChurrasRepository;

@Service
public class ChurrasService {

	@Autowired
	private ChurrasRepository churrasRepository;

	@Autowired
	private CarneRepository carneRepository;

	private Double gramasPorHomem = .500;
	private Double gramasPorMulher = .400;
	private Double gramasPorCrianca = .250;
	
	public ChurrasDTO findChurras(Long id) {
		var churras = churrasRepository.findById(id).get();

		var listCarnes = carneRepository.findByChurras_id(id).stream().map(x -> new CarneDTO(x))
				.collect(Collectors.toList());
		var quantHomen = (gramasPorHomem / listCarnes.size()) * churras.getHomem();
		var quantMulher = (gramasPorMulher / listCarnes.size()) * churras.getMulher();
		var quantCrianca = (gramasPorCrianca / listCarnes.size()) * churras.getCrianca();
		var total = quantHomen + quantMulher + quantCrianca;
		
		for (CarneDTO carne : listCarnes) {
			carne.setQuantidade(total);
		}

		var dto = new ChurrasDTO(churras);
		dto.setCarnes(listCarnes);

		return dto;
	}

}
