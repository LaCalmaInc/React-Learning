import PropTypes from 'prop-types';
import { useState } from 'react';
import imagen from './diagrama2.png'

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value)
    const [showImage, setShowImage] = useState(false)

    const handleAdd = () =>{
        setCounter( counter +1);
    }
    const handleSubstract = () =>{
        setCounter(counter - 1);
    }
    const handleReset = () => {
        setCounter (value)
    }
    const handleImg = () => {
        setShowImage(!showImage)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSubstract}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleImg}>
                {showImage ? 'Ocultar' : 'Mostrar'}
            </button>
            {showImage && <img src={imagen} alt="Diagrama" />}
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}