import { mainViews } from "./assets/views/views.js";
import { newRegt } from "./assets/views/newreg.js";
import { wall } from "./assets/views/wall.js"

/* changeRouter llama a la función que carga cada template */
const changeRouter = (hash) => {
        if (hash === '') {
            return showTemplate('#/login');
        }

        if (hash === '#/login') {
            return showTemplate(hash);
        }

        if (hash === '#/wall') {
            return showTemplate(hash);
        }
    }
    // imprimirá el template en el html
export const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    // hacemos el match del hash utilizado y el template que queremos mostrar
    switch (router) {
        case 'login':
            containerRoot.appendChild(mainViews());
            break;
        case 'register':
            containerRoot.appendChild(newRegt());
            break;

        case 'wall':
            containerRoot.appendChild(wall());
            break;

        default:
            containerRoot.innerHTML = `<p>Error 404</p>`
    }
}
export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));
    if ('onhashchange' in window) {
        window.onhashchange = () => {
            changeRouter(window.location.hash);
        }
    }
}