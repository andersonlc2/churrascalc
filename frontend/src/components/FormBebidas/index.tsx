import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bebidas } from 'types/churras';
import { BASE_URL } from 'utils/requests';
import './styles..css';


type Props = {
    page : number,
    onChange : Function,
    addBebidas : Function
}

function FormBebidas({ page, onChange, addBebidas } : Props) {

    const [bebidas, setBebidas] = useState<Bebidas[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/bebidas`)
        .then(response => {
            setBebidas(response.data);
        })
    }, [page])

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const onChangePage = () => {
        const listBebidas : Bebidas[] = [];

        bebidas.forEach(b => {
            var element = document.getElementById(b.id) as HTMLInputElement;

            console.log(element.checked);

            if (element.checked) {
                listBebidas.push(b);
            }
        })

        addBebidas(listBebidas);
        onChange(page +1);
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>QUAIS BEBIDAS DESEJA SERVIR?</h3>
            </div>
            <p>Para ter certeza do sucesso do seu churrasco, escolha as bebidas que não podem faltar e lembre de gelar bem antes de servir. Aprecie com moderação.</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form onSubmit={handleSubmit} >
                    <div className='container-form-pessoas-area-form'>

                        {bebidas.map((bebida, index) =>
                        (

                            <div className='container-form-pessoas-area-form-buttons' key={index}>
                                <input type="checkbox" className="btn-check" id={bebida.id} autoComplete="off" />
                                <label className="btn btn-outline-danger" htmlFor={bebida.id}>
                                    <div className='teste'>
                                        <small>{bebida.nome}</small>
                                    </div>
                                </label>
                            </div>
                        )
                        )}


                    </div>
                    <div className='container-form-pessoas-area-submit'>
                        <button type="submit" className="btn btn-primary" onClick={() => {onChange(page -1)}}>Voltar</button>
                        <button type="submit" className="btn btn-primary" onClick={onChangePage}>Finalizar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormBebidas;