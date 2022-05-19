package com.ac.churrascalc.domain.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
	
	@OneToMany(mappedBy = "churras")
	private Set<Carne> carnes = new HashSet<>();

	public Churrasco() {
	}

	public Churrasco(Long id, Integer homem, Integer mulher, Integer crianca, Set<Carne> carnes) {
		this.id = id;
		this.homem = homem;
		this.mulher = mulher;
		this.crianca = crianca;
		this.carnes = carnes;
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

	public Set<Carne> getCarnes() {
		return carnes;
	}

	public Map<Carne, Double> getQuanthomens() {
		var gramasPorHomem = 0.500;
		var grupoCarnes = new HashMap<Carne, Double>();
		
		var gramasPorCarne = this.carnes.size() / gramasPorHomem;
		
		this.carnes.stream().map(carne -> grupoCarnes.put(carne, gramasPorCarne));
		return grupoCarnes;
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
