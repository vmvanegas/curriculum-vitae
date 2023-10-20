import { useRef } from 'react'
import React from 'react';
import ReactToPrint from 'react-to-print';
import CurriculumVitae from '../../pages/curriculum-vitae/CurriculumVitae';
import './PrintButton.css'


class ComponentToPrint extends React.Component {
    render() {
        return (<CurriculumVitae />)
    }
}

const PrintButton = () => {

    const componentRef = useRef();


    return (
        <div>
            <ReactToPrint
                trigger={() => {
                    return <button className='print-button'
                        color='primary'
                        variant='contained'
                    >Imprimir</button>
                }}
                content={() => componentRef.current}
            />
            <ComponentToPrint ref={componentRef} />
        </div>
    );
};

export default PrintButton