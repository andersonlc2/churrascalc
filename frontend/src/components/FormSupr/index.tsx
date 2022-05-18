import './styles..css';


type Props = {
    page : number,
    onChange : Function
}

function FormSupr({ page, onChange } : Props) {

    const supr = ['Carvão', 'Copos', 'Gelo', 'Guardanapos', 'Limão', 'Sal Grosso', 'Pratos', 'Talheres'];

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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

                        {supr.map(suprimento =>
                        (

                            <div className='container-form-pessoas-area-form-buttons'>
                                <input type="checkbox" className="btn-check" id={suprimento} autoComplete="off" />
                                <label className="btn btn-outline-danger" htmlFor={suprimento}>
                                    <div className='teste'>
                                        <small>{suprimento}</small>
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