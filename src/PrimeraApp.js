import React from 'react' //imr snippet
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react' //imr snippet

// FC - Functional Component

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo!'
}

export default PrimeraApp;