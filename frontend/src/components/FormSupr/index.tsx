import axios from 'axios';
import { useEffect, useState } from 'react';
import { Suprimentos } from 'types/churras';
import { BASE_URL } from 'utils/requests';
import './styles..css';


type Props = {
    page : number,
    onChange : Function,
    addSuprimentos : Function
}

function FormSupr({ page, onChange, addSuprimentos } : Props) {

    const [suprimentos, setSuprimentos] = useState<Suprimentos[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/suprimentos`)
        .then(response => {
            setSuprimentos(response.data);
        })
    },[page])

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const listSupri : Suprimentos[] = [];

        suprimentos.forEach(suprimento => {
            var element = document.getElementById(suprimento.id) as HTMLInputElement;

            if (element.checked) {
                listSupri.push(suprimento);
            }
        })

        addSuprimentos(listSupri);
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>NÃO ESQUEÇA DOS SUPRIMENTOS</h3>
            </div>
            <p>Não precisa de firula, mas o básico é essencial. Os suprimentos garantem um churrasco de respeito. Selecione tudo aquilo que precisa:</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form onSubmit={handleSubmit} >
                    <div className='container-form-pessoas-area-form'>

                        {suprimentos.map(suprimento =>
                        (

                            <div className='container-form-pessoas-area-form-buttons'>
                                <input type="checkbox" className="btn-check" id={suprimento.id} autoComplete="off" />
                                <label className="btn btn-outline-danger" htmlFor={suprimento.id}>
                                    <div className='teste'>
                                        <small>{suprimento.nome}</small>
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

export default FormSupr;