package com.ac.churrascalc.domain.dto;

import java.util.ArrayList;
import java.util.List;

import com.ac.churrascalc.domain.model.Churrasco;

public class ChurrasDTO {

	private Integer homem;
	private Integer mulher;
	private Integer crianca;

	private List<CarneDTO> carnes = new ArrayList<>();

	private List<AcompanhaDTO> acompanhamentos = new ArrayList<>();

	private List<SuprimentoDTO> suprimentos = new ArrayList<>();

	private List<BebidaDTO> bebidas = new ArrayList<>();

	public ChurrasDTO() {

	}

	public ChurrasDTO(Churrasco obj) {
		this.homem = obj.getHomem();
		this.mulher = obj.getMulher();
		this.crianca = obj.getCrianca();
	}

	public Integer getHomem() {
		return homem;
	}

	public void setHomem(Integer homem) {
		this.homem = homem;
	}

	public Integer getMulher() {
		return mulher;
	}

	public void setMulher(Integer mulher) {
		this.mulher = mulher;
	}

	public Integer getCrianca() {
		return crianca;
	}

	public void setCrianca(Integer crianca) {
		this.crianca = crianca;
	}

	public List<CarneDTO> getCarnes() {
		return carnes;
	}

	public void setCarnes(List<CarneDTO> listCarnes) {
		this.carnes = listCarnes;
	}

	public List<AcompanhaDTO> getAcompanhamentos() {
		return acompanhamentos;
	}

	public void setAcompanhamentos(List<AcompanhaDTO> acompanhamentos) {
		this.acompanhamentos = acompanhamentos;
	}

	public List<SuprimentoDTO> getSuprimentos() {
		return suprimentos;
	}

	public void setSuprimentos(List<SuprimentoDTO> suprimentos) {
		this.suprimentos = suprimentos;
	}

	public List<BebidaDTO> getBebidas() {
		return bebidas;
	}

	public void setBebidas(List<BebidaDTO> bebidas) {
		this.bebidas = bebidas;
	}

}
