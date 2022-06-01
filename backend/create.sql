create table tb_acompanha (id int8 generated by default as identity, nome varchar(255), quant_adulto float8, quant_crianca float8, primary key (id));
create table tb_bebida (id int8 generated by default as identity, litros float8, nome varchar(255), primary key (id));
create table tb_carne (id int8 generated by default as identity, nome varchar(255), tipo varchar(255), primary key (id));
create table tb_churrasco (id int8 generated by default as identity, crianca int4, homem int4, mulher int4, primary key (id));
create table tb_suprimento (id int8 generated by default as identity, nome varchar(255), quantidade float8, primary key (id));
INSERT INTO tb_carne(nome, tipo) VALUES ('Cupim', 'bovina');
INSERT INTO tb_carne(nome, tipo) VALUES ('Alcatra', 'bovina');
INSERT INTO tb_carne(nome, tipo) VALUES ('Picanha', 'bovina');
INSERT INTO tb_acompanha(nome, quant_adulto, quant_crianca) VALUES ('Arroz', 0.400, 0.250);
INSERT INTO tb_acompanha(nome, quant_adulto, quant_crianca) VALUES ('Farofa', 0.300, 0.150);
INSERT INTO tb_acompanha(nome, quant_adulto, quant_crianca) VALUES ('Pão de Alho', 0.400, 0.300);
INSERT INTO tb_acompanha(nome, quant_adulto, quant_crianca) VALUES ('Queijo Coalho', 0.400, 0.250);
INSERT INTO tb_acompanha(nome, quant_adulto, quant_crianca) VALUES ('Vinagrete', 0.300, 0.250);
INSERT INTO tb_suprimento(nome, quantidade) VALUES ('Carvão', 0.500);
INSERT INTO tb_suprimento(nome, quantidade) VALUES ('Sal Grosso', 0.150);
INSERT INTO tb_suprimento(nome, quantidade) VALUES ('Limão', 0.300);
INSERT INTO tb_bebida(nome, litros) VALUES ('Cerveja', 3);
INSERT INTO tb_bebida(nome, litros) VALUES ('Refrigerante', 2);
