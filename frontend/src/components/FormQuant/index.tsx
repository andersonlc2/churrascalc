import { ReactComponent as HomemIcon } from 'assets/img/homem.svg';
import { ReactComponent as MulherIcon } from 'assets/img/mulher.svg';
import { ReactComponent as CriancaIcon } from 'assets/img/crianca.svg';

import './styles..css';

type Props = {
    page : number,
    onChange : Function
}

function FormQuant( {page, onChange} : Props) {

        
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const homens = (event.target as any).homens.value;
        
        console.log(homens);
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>QUANTAS PESSOAS VÃO AO CHURRAS?</h3>
            </div>
            <hr />
            <div className='container-form-pessoas-area' >
                <form onSubmit={handleSubmit}>
                    <div className='container-form-pessoas-area-form'>
                        <div className='container-form-pessoas-inputs'>
                            <HomemIcon />
                            <label htmlFor="homens">HOMENS</label>
                            <input type="number" id="homens" min={0} />
                        </div>
                        <div className='container-form-pessoas-inputs'>
                            <MulherIcon />
                            <label htmlFor="mulheres">MULHERES</label>
                            <input type="number" id="mulheres" min={0} />
                        </div>
                        <div className='container-form-pessoas-inputs'>
                            <CriancaIcon />
                            <label htmlFor="criancas">CRIANÇAS</label>
                            <input type="number" id="criancas" min={0} />
                        </div>
                    </div>
                    <div className='container-form-pessoas-area-submit'>
                        <button type="submit" className="btn btn-primary" disabled>Voltar</button>
                        <button type="submit" className="btn btn-primary" onClick={() => onChange(page +1)}>Próximo</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default FormQuant;