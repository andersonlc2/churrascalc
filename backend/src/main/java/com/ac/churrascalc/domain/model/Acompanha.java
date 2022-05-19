package com.ac.churrascalc.domain.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_acompanha")
public class Acompanha implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private Double quantAdulto;
	private Double quantCrianca;

	public Acompanha() {

	}

	public Acompanha(Long id, String nome, Double quantAdulto, Double quantCrianca) {
		this.id = id;
		this.nome = nome;
		this.quantAdulto = quantAdulto;
		this.quantCrianca = quantCrianca;
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

	public Double getQuantAdulto() {
		return quantAdulto;
	}

	public void setQuantAdulto(Double quantAdulto) {
		this.quantAdulto = quantAdulto;
	}

	public Double getQuantCrianca() {
		return quantCrianca;
	}

	public void setQuantCrianca(Double quantCrianca) {
		this.quantCrianca = quantCrianca;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Acompanha other = (Acompanha) obj;
		return Objects.equals(id, other.id);
	}

}
