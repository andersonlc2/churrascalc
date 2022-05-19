package com.ac.churrascalc.domain.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_churrasco")
public class Churrasco implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Integer homem;
	private Integer mulher;
	private Integer crianca;

	public Churrasco() {
	}

	public Churrasco(Long id, Integer homem, Integer mulher, Integer crianca) {
		this.id = id;
		this.homem = homem;
		this.mulher = mulher;
		this.crianca = crianca;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
		Churrasco other = (Churrasco) obj;
		return Objects.equals(id, other.id);
	}

}
