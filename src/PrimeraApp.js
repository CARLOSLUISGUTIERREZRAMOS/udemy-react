// import React, { Fragment } from 'react' //imr snippet
import React from 'react' //imr snippet

// FC - Functional Component

const PrimeraApp = ( props ) => {

    const saludo = 'Hola mundo const';

    console.log(props)

    return (
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicacion</p>
        </>
    )
}

export default PrimeraApp;