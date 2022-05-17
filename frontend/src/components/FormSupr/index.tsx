import './styles..css';


function FormSupr() {

    const supr = ['Carvão', 'Copos', 'Gelo', 'Guardanapos', 'Limão', 'Sal Grosso', 'Pratos', 'Talheres'];

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>VOCÊ PENSOU EM QUAIS ACOMPANHAMENTOS?</h3>
            </div>
            <p>Descobrir novos sabores é fácil quando você pode contar com alguns acompanhamentos. Assim como a carne e os vegetais, eles são importantes para agradar os convidados e tornar o momento ainda mais especial.</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form >
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
                        <button type="submit" className="btn btn-primary" disabled>Voltar</button>
                        <button type="submit" className="btn btn-primary">Próximo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormSupr;