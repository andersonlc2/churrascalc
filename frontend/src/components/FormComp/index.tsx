import axios from 'axios';
import { useEffect, useState } from 'react';
import { Acompanhamentos } from 'types/churras';
import { BASE_URL } from 'utils/requests';
import './styles..css';


type Props = {
    page : number,
    onChange : Function,
    addComp: Function
}

function FormComp( { page, onChange, addComp } : Props ) {

    const [ comp, setComp ] = useState<Acompanhamentos[]>([]);

    useEffect(() => {
        
        axios.get(`${BASE_URL}/acompanhamentos`)
        .then(response => {
            setComp(response.data);
        })
    }, [page]);

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const listComp : Acompanhamentos[] = [];

        comp.forEach(acompanhamento => {
            var element = document.getElementById(acompanhamento.id) as HTMLInputElement;

            if (element.checked) {
                listComp.push(acompanhamento);
            }
        })

        addComp(listComp);
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>VOCÊ PENSOU EM QUAIS ACOMPANHAMENTOS?</h3>
            </div>
            <p>Descobrir novos sabores é fácil quando você pode contar com alguns acompanhamentos. Assim como a carne e os vegetais, eles são importantes para agradar os convidados e tornar o momento ainda mais especial.</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form onSubmit={handleSubmit}>
                    <div className='container-form-pessoas-area-form'>

                        {comp.map(acompanhamento =>
                        (

                            <div className='container-form-pessoas-area-form-buttons'>
                                <input type="checkbox" className="btn-check" id={acompanhamento.id} autoComplete="off" />
                                <label className="btn btn-outline-danger" htmlFor={acompanhamento.id}>
                                    <div className='teste'>
                                        <small>{acompanhamento.nome}</small>
                                    </div>
                                </label>
                            </div>
                        )
                        )}


                    </div>
                    <div className='container-form-pessoas-area-submit'>
                        <button type="submit" className="btn btn-primary" onClick={() => {onChange(page -1)}}>Voltar</button>
                        <button type="submit" className="btn btn-primary" onClick={() => {onChange(page +1)}}>Próximo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormComp;