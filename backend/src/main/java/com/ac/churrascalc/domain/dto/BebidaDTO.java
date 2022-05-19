package com.ac.churrascalc.domain.dto;

import com.ac.churrascalc.domain.model.Bebida;

public class BebidaDTO {

	private Long id;
	private String nome;
	private Double litros;

	public BebidaDTO() {

	}

	public BebidaDTO(Bebida obj) {
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.litros = obj.getLitros();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Double getLitros() {
		return litros;
	}

	public void setLitros(Double litros) {
		this.litros = litros;
	}

}
