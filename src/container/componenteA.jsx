import React, { useState } from 'react'
import { Contact } from '../models/contact.class'
import ComponenteB from './pure/componenteB'
import ContactForm from './pure/form/contactForm'

export default function ComponenteA() {

    const contactoPrueba = new Contact('Juan', 'Diaz', 'juan.diaz@hotmail.com', false)
    const contactoPrueba1 = new Contact('Amilkar', 'Ibarra', 'ing_amilkar@hotmail.com', false)
    const contactoPrueba2 = new Contact('Carlos', 'Vela', 'carlos-vela.23@hotmail.com', false)

    const [contactos, setContactos] = useState([])

    function deleteContact(cont){
      console.log('comlplete this Task:', cont)
      const index = contactos.indexOf(cont);
      const tempContacts = [...contactos];
      tempContacts.splice(index,1);
      setContactos(tempContacts);
    }

    function addContact(cont){
      const tempContacts = [...contactos];
      tempContacts.push(cont);
      setContactos(tempContacts);
    }
  return (
    <div>
         <ContactForm add={addContact}></ContactForm>
        <h2>Contactos</h2>
        <div>
          { contactos.map((contacto, index) => <ComponenteB contact={contacto} key={index} deleteC={deleteContact} ></ComponenteB>) }
        </div>
       
    </div>
  )
}
