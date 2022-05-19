package com.ac.churrascalc.domain.dto;

import java.util.ArrayList;
import java.util.List;

import com.ac.churrascalc.domain.model.Churrasco;

public class ChurrasDTO {

	private Long id;
	private Integer homem;
	private Integer mulher;
	private Integer crianca;

	private List<CarneDTO> carnes = new ArrayList<>();

	public ChurrasDTO() {

	}

	public ChurrasDTO(Churrasco obj) {
		this.id = obj.getId();
		this.homem = obj.getHomem();
		this.mulher = obj.getMulher();
		this.crianca = obj.getCrianca();
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

	public List<CarneDTO> getCarnes() {
		return carnes;
	}

	public void setCarnes(List<CarneDTO> listCarnes) {
		this.carnes = listCarnes;
	}

}
