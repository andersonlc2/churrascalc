import './styles..css';


function FormBebidas() {

    const bebidas = ['Água', 'Cachaça', 'Cerveja', 'Refrigerante', 'Suco', 'Vinho', 'Vodka', 'Wiskey'];

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>QUAIS BEBIDAS DESEJA SERVIR?</h3>
            </div>
            <p>Para ter certeza do sucesso do seu churrasco, escolha as bebidas que não podem faltar e lembre de gelar bem antes de servir. Aprecie com moderação.</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form >
                    <div className='container-form-pessoas-area-form'>

                        {bebidas.map(bebida =>
                        (

                            <div className='container-form-pessoas-area-form-buttons'>
                                <input type="checkbox" className="btn-check" id={bebida} autoComplete="off" />
                                <label className="btn btn-outline-danger" htmlFor={bebida}>
                                    <div className='teste'>
                                        <small>{bebida}</small>
                                    </div>
                                </label>
                            </div>
                        )
                        )}


                    </div>
                    <div className='container-form-pessoas-area-submit'>
                        <button type="submit" className="btn btn-primary" disabled>Voltar</button>
                        <button type="submit" className="btn btn-primary">Finalizar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormBebidas;