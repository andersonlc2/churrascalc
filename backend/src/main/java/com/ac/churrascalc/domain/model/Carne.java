package com.ac.churrascalc.domain.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_carne")
public class Carne implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String tipo;

	@ManyToOne
	@JoinColumn(name = "churras_id")
	private Churrasco churras;

	public Carne() {

	}

	public Carne(Long id, String nome, String tipo, Churrasco churras) {
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.churras = churras;
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

	public Churrasco getChurras() {
		return churras;
	}

	public void setChurras(Churrasco churras) {
		this.churras = churras;
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
		Carne other = (Carne) obj;
		return Objects.equals(id, other.id);
	}

}
