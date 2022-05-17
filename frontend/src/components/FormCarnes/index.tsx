import { ReactComponent as ChickenIcon } from 'assets/img/chicken.svg';
import { ReactComponent as CowIcon } from 'assets/img/cow.svg';
import { ReactComponent as PigIcon } from 'assets/img/pig.svg';

import './styles..css';


function FormCarnes() {

    const bovina = {
        icon: <CowIcon />,
        cortes: ['Alcatra', 'Cupim', 'Picanha', 'Fraldinha', 'Coxão-Mole']
    }

    const suina = {
        icon: <PigIcon />,
        cortes: ['Pernil', 'Costelinha', 'Linguiça']
    }

    const frango = {
        icon: <ChickenIcon />,
        cortes: ['Asa', 'Coxa', 'Peito', 'Coração']
    }

    const carnes = [bovina, suina, frango];

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>QUAIS CARNES E VEGETAIS SERÃO SERVIDOS?</h3>
            </div>
            <p>Vários cortes de carne e opções de vegetais para fazer o seu churrasco. Garanta a melhor experiência para os seus convidados, escolha com sabedoria:</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form >
                    <div className='container-form-pessoas-area-form'>

                        {carnes.map(tipo => (tipo.cortes.map(corte => (
                            (

                                <div className='container-form-pessoas-area-form-buttons'>
                                    <input type="checkbox" className="btn-check" id={corte} autoComplete="off" />
                                    <label className="btn btn-outline-danger" htmlFor={corte}>
                                        <div className='teste'>
                                            <small>{corte}</small>
                                            {tipo.icon}
                                        </div>
                                    </label>
                                </div>
                            )

                        )))
                        )}


                    </div>
                    <div className='container-form-pessoas-area-submit'>
                        <button type="submit" className="btn btn-primary" disabled>Voltar</button>
                        <button type="submit" className="btn btn-primary">Próximo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormCarnes;