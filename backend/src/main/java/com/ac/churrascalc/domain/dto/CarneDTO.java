package com.ac.churrascalc.domain.dto;

import com.ac.churrascalc.domain.model.Carne;

public class CarneDTO {

	private Long id;
	private String nome;
	private String tipo;
	private Double quantidade;

	public CarneDTO() {

	}

	public CarneDTO(Carne obj) {
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.tipo = obj.getTipo();
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

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Double quantidade) {
		this.quantidade = quantidade;
	}

}
