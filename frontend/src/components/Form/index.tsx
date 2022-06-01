
import FormBebidas from 'components/FormBebidas';
import FormCarnes from 'components/FormCarnes';
import FormComp from 'components/FormComp';
import FormQuant from 'components/FormQuant';
import FormSupr from 'components/FormSupr';
import Resultado from 'components/Resultado';
import { useEffect, useState } from 'react';
import { Acompanhamentos, Bebidas, Carne, Churras, Pessoas, Suprimentos } from 'types/churras';


import './styles.css';

function Form() {
    const [pageNumber, setPageNumber] = useState(0);
    const [pessoas, setPessoas] = useState<Pessoas>({
        homens: 0,
        mulheres: 0,
        criancas: 0
    });
    const [carne, setCarne] = useState<Carne[]>([]);
    const [comp, setComp] = useState<Acompanhamentos[]>([]);
    const [supri, setSupri] = useState<Suprimentos[]>([]);
    const [beb, setBeb] = useState<Bebidas[]>([]);

    const [churras, setChurras] = useState<Churras>({
        homem : 0,
        mulher : 0,
        crianca : 0,
        carnes: [],
        acompanhamentos: [],
        suprimentos: [],
        bebidas: []
    });

    const alterPage = ( newPage : number) => {
        setPageNumber(newPage);
    }
    
    // Inicia a montagem do churrasco
    const addPessoas = (pessoas: Pessoas) => {
        setPessoas(pessoas);
    }

    const addCarnes = (carnes: Carne[]) => {
        setCarne(carnes);
    }

    const addAcompanhamentos = (comp: Acompanhamentos[]) => {
        setComp(comp);
    }

    const addSuprimentos = (supri : Suprimentos[]) => {
        setSupri(supri);
    }   

    const addBebidas = (beb : Bebidas[]) => {
        setBeb(beb);
    }

    const churrasco : Churras = {
        homem : pessoas.homens,
        mulher : pessoas.mulheres,
        crianca : pessoas.criancas,
        carnes: carne,
        acompanhamentos: comp,
        suprimentos: supri,
        bebidas: beb
    }



    const forms = [
        <FormQuant page={pageNumber} onChange={alterPage} addPessoas={addPessoas}/>,
        <FormCarnes page={pageNumber} onChange={alterPage} addCarnes={addCarnes}/>,
        <FormComp page={pageNumber} onChange={alterPage} addComp={addAcompanhamentos}/>,
        <FormSupr page={pageNumber} onChange={alterPage} addSuprimentos={addSuprimentos}/>,
        <FormBebidas page={pageNumber} onChange={alterPage} addBebidas={addBebidas}/>,
        <Resultado page={pageNumber} onChange={alterPage} churrasco={churras}/>
    ]

    
    const [form, setForm] = useState(forms[pageNumber]);

    useEffect(() => {
 
        setForm(forms[pageNumber]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);



    return (
        <div className="container-form row">
            <div className='container-form-dados'>
                {form}
            </div>
        </div>
    );
}

export default Form;