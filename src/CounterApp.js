import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    //Empezamos usando hooks'Goku'

    const [ counter, setCounter ] = useState( 0 ); // []


    const handleAdd = () => {
        // setCounter(counter + 1 )
        //Ora forma
        setCounter( (c) => c + 1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
        </>
    )
}
//Controlando el tipo de dato del props
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
