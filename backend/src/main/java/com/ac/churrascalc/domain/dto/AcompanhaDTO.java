package com.ac.churrascalc.domain.dto;

import com.ac.churrascalc.domain.model.Acompanha;

public class AcompanhaDTO {

	private Long id;
	private String nome;
	private String quantidade;

	public AcompanhaDTO() {

	}

	public AcompanhaDTO(Acompanha obj, Integer adultos, Integer criancas) {
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.quantidade = setQuantidade(adultos, obj.getQuantAdulto(), criancas, obj.getQuantCrianca());
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

	public String getQuantidade() {
		return quantidade;
	}

	public String setQuantidade(Integer adultos, double gramasAdulto, Integer crianca, double gramasCrianca) {
		double total = (adultos * gramasAdulto) + (crianca * gramasCrianca);
		return total >= 1 ? String.format("%.1f kg", total) : String.format("%.3f g", total);
	}

}
