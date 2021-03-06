import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const handleAdd = (e) => {
        console.log(e)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <button onClick={ handleAdd }>+1</button>
        </>
    )
}
//Controlando el tipo de dato del props
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
