import './styles..css';


type Props = {
    page : number,
    onChange : Function
}

function Resultado({ page, onChange } : Props) {

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    
    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <h3>TUDO PRONTO PARA O CHURRASCO!</h3>
            </div>
            <hr />
            <div className='container-form-pessoas-area'>
                <form onSubmit={handleSubmit} >
                    <div className='container-form-pessoas-area-form'>



                    </div>
                    <div className='container-form-pessoas-area-submit'>
                        <button type="submit" className="btn btn-primary" onClick={() => onChange(page = 0)}>Novo Cálculo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Resultado;