import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Churras } from 'types/churras';
import { BASE_URL } from 'utils/requests';
import { ReactComponent as ResultIcon } from 'assets/img/party.svg';
import './styles..css';


type Props = {
    page : number,
    onChange : Function,
    churrasco: Churras
}

function Resultado({ page, onChange, churrasco } : Props) {

    const [calculo, setCalculo] = useState<Churras>();

    useEffect(() => {
        
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/churras/calcular',
            data: {
                "homem": churrasco.homem ? churrasco.homem : 0,
                "mulher": churrasco.mulher ? churrasco.mulher : 0,
                "crianca": churrasco.crianca ? churrasco.crianca : 0,
                "carnes": churrasco.carnes,
                "acompanhamentos": churrasco.acompanhamentos,
                "suprimentos": churrasco.suprimentos,
                "bebidas": churrasco.bebidas
            }
        }

        axios(config)
            .then(response => {
                setCalculo(response.data);
            }).catch(err => {
                console.log(err);
            });
    }, [churrasco])


    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const handleValues = (valor: number) => {
        if (valor > 1) {
            return `${Math.floor(valor)} kg`
        }
        return `${valor.toFixed(3)} g`
    }

    return (
        <div className='container-form-pessoas'>
            <div className='container-form-pessoas-title'>
                <ResultIcon  className='title-icon' />
                <h3>TUDO PRONTO PARA O CHURRASCO!</h3>
            </div>
            <hr />
            <div className='container-form-pessoas-area'>
                <form onSubmit={handleSubmit} >
                    <div className='container-form-pessoas-area-form'>
                        <div className="table-responsive-xl">

                            <table className='table table-hover'>

                                <thead>
                                    <tr>
                                        <th scope="col">Quantidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Homens</td>
                                        <td>{calculo?.homem}</td>
                                    </tr>
                                    <tr>
                                        <td>Mulheres</td>
                                        <td>{calculo?.mulher}</td>
                                    </tr>
                                    <tr>
                                        <td>Crian??as</td>
                                        <td>{calculo?.crianca}</td>
                                    </tr>
                                </tbody>

                                <thead>
                                    <tr>
                                        <th scope="col">Carnes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {calculo?.carnes.map((carnes, index) => (
                                        <tr key={index}>
                                            <td>{carnes.nome}</td>
                                            <td>{carnes.quantidade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                
                                <thead>
                                    <tr>
                                        <th scope="col">Acompanhamentos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {calculo?.acompanhamentos.map((comp, index) => (
                                        <tr key={index}>
                                            <td>{comp.nome}</td>
                                            <td>{comp.quantidade}</td>
                                        </tr>
                                    ))}
                                </tbody>

                                <thead>
                                    <tr>
                                        <th scope="col">Suprimentos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {calculo?.suprimentos.map((supri, index) => (
                                        <tr key={index}>
                                            <td>{supri.nome}</td>
                                            <td>{handleValues(supri.quantidade)}</td>
                                        </tr>
                                    ))}
                                </tbody>

                                <thead>
                                    <tr>
                                        <th scope="col">Bebidas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {calculo?.bebidas.map((bebidas, index) => (
                                        <tr key={index}>
                                            <td>{bebidas.nome}</td>
                                            <td>{bebidas.litros.toFixed(1)} L</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>
                    <div className='container-form-pessoas-area-submit-result'>
                        <button type="submit" className="btn btn-primary" onClick={() => onChange(page = 0)}>Novo C??lculo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Resultado;