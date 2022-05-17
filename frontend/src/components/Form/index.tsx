
import FormBebidas from 'components/FormBebidas';
import FormCarnes from 'components/FormCarnes';
import FormComp from 'components/FormComp';
import FormQuant from 'components/FormQuant';
import FormSupr from 'components/FormSupr';
import Resultado from 'components/Resultado';
import { useEffect, useState } from 'react';

import './styles.css';

function Form() {
    const [pageNumber, setPageNumber] = useState(0);

    const alterPage = ( newPage : number) => {
        setPageNumber(newPage);
    }
    const forms = [
        <FormQuant page={pageNumber} onChange={alterPage}/>,
        <FormCarnes />,
        <FormComp />,
        <FormSupr />,
        <FormBebidas />,
        <Resultado />
    ]

    
    const [form, setForm] = useState(forms[0]);

    useEffect(() => {
        setForm(forms[pageNumber]);
    }, [pageNumber]);

    return (
        <div className="container-form row">
            <div className='container-form-dados'>
                {form}
            </div>
        </div>
    );
}

export default Form;