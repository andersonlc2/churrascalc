export type Pessoas = {
    homens : number,
    mulheres : number,
    criancas : number
}

export type Carne = {
    id: number;
    nome: string;
    tipo: string;
    quantidade: number;
}

export type Acompanhamentos = {
    id: string;
    nome: string;
    quantidade: number;
}

export type Suprimentos = { 
    id: string,
    nome: string,
    quantidade: number
}

export type Bebidas = {
    id: string,
    nome: string,
    litros: number
}

export type Churras = {
    homem: number,
    mulher: number,
    crianca: number,
    carnes: Carne[],
    acompanhamentos: Acompanhamentos[],
    suprimentos: Suprimentos[],
    bebidas: Bebidas[]
}