package com.ac.churrascalc.domain.dto;

import com.ac.churrascalc.domain.model.Suprimento;

public class SuprimentoDTO {

	private Long id;
	private String nome;
	private Double quantidade;

	public SuprimentoDTO() {

	}

	public SuprimentoDTO(Suprimento obj) {
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.quantidade = obj.getQuantidade();
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

	public Double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Double quantidade) {
		this.quantidade = quantidade;
	}

}
