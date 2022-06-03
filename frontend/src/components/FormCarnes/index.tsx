import { ReactComponent as ChickenIcon } from 'assets/img/chicken.svg';
import { ReactComponent as CowIcon } from 'assets/img/cow.svg';
import { ReactComponent as PigIcon } from 'assets/img/pig.svg';
import { ReactComponent as MeatIcon } from 'assets/img/meat.svg';
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
                <MeatIcon className='title-icon' />
                <h3>QUAIS CARNES SERÃO SERVIDAS?</h3>
            </div>
            <p>Garanta a melhor experiência para os seus convidados, escolha os cortes com sabedoria:</p>
            <hr />
            <div>
                <form onSubmit={handleSubmit} className='container-form-pessoas-area'>
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