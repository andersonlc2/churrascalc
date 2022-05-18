import './styles..css';


type Props = {
    page : number,
    onChange : Function
}

function FormBebidas({ page, onChange } : Props) {

    const bebidas = ['Água', 'Cachaça', 'Cerveja', 'Refrigerante', 'Suco', 'Vinho', 'Vodka', 'Wiskey'];

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>QUAIS BEBIDAS DESEJA SERVIR?</h3>
            </div>
            <p>Para ter certeza do sucesso do seu churrasco, escolha as bebidas que não podem faltar e lembre de gelar bem antes de servir. Aprecie com moderação.</p>
            <hr />
            <div className='container-form-pessoas-area'>
                <form onSubmit={handleSubmit} >
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
                        <button type="submit" className="btn btn-primary" onClick={() => {onChange(page -1)}}>Voltar</button>
                        <button type="submit" className="btn btn-primary" onClick={() => {onChange(page +1)}}>Finalizar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormBebidas;