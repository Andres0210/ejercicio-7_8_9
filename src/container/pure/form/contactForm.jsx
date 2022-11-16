import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({ add }) => {

   const nameRef = useRef('');
   const lastnameRef = useRef('');
   const emailRef = useRef('');

    function addContact(e){
        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        );
       add(newContact);         
    }


    return (
        <form onSubmit={addContact}>
            <div>
                <input ref={nameRef} id='inputName' type='text' placeholder='Nombre de contacto' />
                <input ref={lastnameRef} id='inputLastname' type='text' placeholder='Apellido' />
                <input ref={emailRef} id='inputEmail' type='text' placeholder='Correo electrónico' />
            </div>
            <button type='submit'>Agregar contacto</button>
        </form>

            
        
    );
}

export default ContactForm;
