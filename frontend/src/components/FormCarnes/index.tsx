import { ReactComponent as ChickenIcon } from 'assets/img/chicken.svg';
import { ReactComponent as CowIcon } from 'assets/img/cow.svg';
import { ReactComponent as PigIcon } from 'assets/img/pig.svg';
import { Carne } from 'types/churras';
import './styles..css';

type Props = {
    page : number,
    onChange : Function,
    addCarnes : Function,
    carnes: Carne[]
}

function FormCarnes({ page, onChange, addCarnes, carnes } : Props) {

    const setIcon = (carne : Carne) => {
        if (carne.tipo === "bovina") {
            return <CowIcon />;
        } else if (carne.tipo === "suina") {
            return <PigIcon />;
        } else {
            return <ChickenIcon />;
        }
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const onChangePage = () => {
        const listCarnes : Carne[] = [];

        carnes.forEach(carne => {
            var element = document.getElementById(carne.id.toString()) as HTMLInputElement;
    
            if (element.checked) {
                listCarnes.push(carne);
            }
        })
        
        addCarnes(listCarnes);
        onChange(page +1);
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>QUAIS CARNES E VEGETAIS SERÃO SERVIDOS?</h3>
            </div>
            <p>Vários cortes de carne e opções de vegetais para fazer o seu churrasco. Garanta a melhor experiência para os seus convidados, escolha com sabedoria:</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form onSubmit={handleSubmit}>
                    <div className='container-form-pessoas-area-form'>

                        {carnes.map((carne, index) => (
                            (

                                <div className='container-form-pessoas-area-form-buttons' key={index}>
                                    <input type="checkbox" className="btn-check" id={carne.id.toString()} autoComplete="off"/>
                                    <label className="btn btn-outline-danger" htmlFor={carne.id.toString()}>
                                        <div className='teste'>
                                            <small>{carne.nome}</small>
                                            {setIcon(carne)}
                                        </div>
                                    </label>
                                </div>
                            )
                        )
                        )}
                    </div>
                    <div className='container-form-pessoas-area-submit'>
                        <button type="submit" className="btn btn-primary" onClick={() => onChange(page -1)}>Voltar</button>
                        <button type="submit" className="btn btn-primary" onClick={onChangePage}>Próximo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormCarnes;