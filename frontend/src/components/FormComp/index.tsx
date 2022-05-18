import './styles..css';


type Props = {
    page : number,
    onChange : Function
}

function FormComp( { page, onChange } : Props ) {

    const comp = ['Arroz', 'Farofa', 'Maionese', 'Pão de Alho', 'Queijo Coalho', 'Vinagrete'];

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                                <input type="checkbox" className="btn-check" id={acompanhamento} autoComplete="off" />
                                <label className="btn btn-outline-danger" htmlFor={acompanhamento}>
                                    <div className='teste'>
                                        <small>{acompanhamento}</small>
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