import { Acompanhamentos } from 'types/churras';
import './styles..css';


type Props = {
    page : number,
    onChange : Function,
    addComp: Function,
    comp: Acompanhamentos[]
}

function FormComp( { page, onChange, addComp, comp } : Props ) {

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const onChangePage = () => {
        const listComp : Acompanhamentos[] = [];

        comp.forEach(acompanhamento => {
            var element = document.getElementById(acompanhamento.id) as HTMLInputElement;

            if (element.checked) {
                listComp.push(acompanhamento);
            }
        })

        addComp(listComp);
        onChange(page +1);
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>VOCÊ PENSOU EM QUAIS ACOMPANHAMENTOS?</h3>
            </div>
            <p> Assim como as carnes os acompanhamentos são importantes para agradar os convidados e tornar o momento ainda mais especial.</p>
            <hr />
            <div>
                <form onSubmit={handleSubmit} className='container-form-pessoas-area'>
                    <div className='container-form-pessoas-area-form'>

                        {comp.map((acompanhamento, index) =>
                        (

                            <div className='container-form-pessoas-area-form-buttons' key={index}>
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
                        <button type="submit" className="btn btn-primary" onClick={onChangePage}>Próximo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormComp;