export class Contact {
    name = '';
    lastname = '';
    email = '';
    conectado = false; 
    constructor(name, lastname, email, conectado){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.conectado = conectado;
    }
}