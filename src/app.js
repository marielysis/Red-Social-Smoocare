// se traen las cosas que se necesitan desde el inicio
import { mainViews } from './views/views.js';
const
    start = () => {
        //la primera pantalla que abre 
        mainViews()

    }
    // aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
window.addEventListener('load', start);