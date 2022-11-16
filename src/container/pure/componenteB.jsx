import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponenteB = ( {contact, deleteC} ) => {

    const [estado, setEstado] = useState(contact.conectado);

    function changeState(){
        setEstado(!estado)
    }

    return (
        <div>
            <h3>Nombre: {contact.name}</h3>
            <h3>Apellido: {contact.lastname}</h3>
            <h3>E-mail: {contact.email}</h3>
            <h3>Estado: {estado ? 'EN LINEA' : 'NO DISPONIBLE'}</h3>
            <button onClick={changeState}>{estado ? 'Desconectar' : 'Conectar'}</button>
            <button onClick={() => deleteC(contact)}>Eliminar</button>
        </div>
    );
};


ComponenteB.propTypes = {

};


export default ComponenteB;
