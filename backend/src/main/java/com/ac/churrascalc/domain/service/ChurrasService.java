package com.ac.churrascalc.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ac.churrascalc.domain.dto.AcompanhaDTO;
import com.ac.churrascalc.domain.dto.BebidaDTO;
import com.ac.churrascalc.domain.dto.CarneDTO;
import com.ac.churrascalc.domain.dto.ChurrasDTO;
import com.ac.churrascalc.domain.dto.SuprimentoDTO;
import com.ac.churrascalc.domain.repository.AcompanhaRepository;
import com.ac.churrascalc.domain.repository.BebidaRepository;
import com.ac.churrascalc.domain.repository.CarneRepository;
import com.ac.churrascalc.domain.repository.SuprimentoRepository;

@Service
public class ChurrasService {

	// Quantidade todal de carne consumida por uma pessoa
	private static final Double GRAMAS_POR_HOMEM = .500;
	private static final Double GRAMAS_POR_MULHER = .400;
	private static final Double GRAMAS_POR_CRIANCA = .250;

	@Autowired
	private CarneRepository carneRepository;

	@Autowired
	private AcompanhaRepository acompRepository;

	@Autowired
	private SuprimentoRepository supriRepository;

	@Autowired
	private BebidaRepository bebidaRepository;

	/**
	 * Essa função faz o calculo geral do churrasco
	 * 
	 * @param churras
	 * @return representação final do calculo
	 */
	public ChurrasDTO calcular(ChurrasDTO churras) {

		var adultos = churras.getHomem() + churras.getMulher();
		var criancas = churras.getCrianca();

		// Trata as quantidades de carne - REFATORAR
		int quantTipos = churras.getCarnes().size();
		double quantHomen = (GRAMAS_POR_HOMEM / quantTipos) * churras.getHomem();
		double quantMulher = (GRAMAS_POR_MULHER / quantTipos) * churras.getMulher();
		double quantCrianca = (GRAMAS_POR_CRIANCA / quantTipos) * churras.getCrianca();
		double total = quantHomen + quantMulher + quantCrianca;

		List<CarneDTO> listCarnes = new ArrayList<>();

		for (CarneDTO c : churras.getCarnes()) {
			listCarnes.add(new CarneDTO(carneRepository.findByNome(c.getNome()).get()));
		}

		listCarnes.stream().forEach(carne -> carne
				.setQuantidade(total >= 1 ? String.format("%.1f Kg", total) : String.format("%.3f g", total)));

		churras.setCarnes(listCarnes);

		// Trata as quantidades de acompanhamentos
		List<AcompanhaDTO> acomp = new ArrayList<>();

		for (AcompanhaDTO c : churras.getAcompanhamentos()) {
			acomp.add(new AcompanhaDTO(acompRepository.findByNome(c.getNome()).get(), adultos, criancas));
		}

		churras.setAcompanhamentos(acomp);

		// Trata as quantidades de suprimentos
		List<SuprimentoDTO> supri = new ArrayList<>();

		for (SuprimentoDTO c : churras.getSuprimentos()) {
			supri.add(new SuprimentoDTO(supriRepository.findByNome(c.getNome()).get()));
		}

		churras.setSuprimentos(supri);

		// Trata as quantidades de bebidas
		List<BebidaDTO> bebidas = new ArrayList<>();

		for (BebidaDTO c : churras.getBebidas()) {
			bebidas.add(new BebidaDTO(bebidaRepository.findByNome(c.getNome()).get()));
		}

		churras.setBebidas(bebidas);

		return churras;
	}

}
