import { Suprimentos } from 'types/churras';
import './styles..css';


type Props = {
    page : number,
    onChange : Function,
    addSuprimentos : Function,
    suprimentos: Suprimentos[]
}

function FormSupr({ page, onChange, addSuprimentos, suprimentos } : Props) {

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const onChangePage = () => {
        const listSupri : Suprimentos[] = [];

        suprimentos.forEach(suprimento => {
            var element = document.getElementById(suprimento.id) as HTMLInputElement;

            if (element.checked) {
                listSupri.push(suprimento);
            }
        })

        addSuprimentos(listSupri);
        onChange(page +1);
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

                        {suprimentos.map((suprimento, index) =>
                        (

                            <div className='container-form-pessoas-area-form-buttons' key={index}>
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
                        <button type="submit" className="btn btn-primary" onClick={onChangePage}>Próximo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormSupr;