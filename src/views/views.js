import { newRegt } from './newreg.js';
//import { buttonGoogle } from '/user.js';

export const mainViews = () => {
    //creamos vista o pagina principal
    const contPrincipal = document.getElementById("root");
    //creamos container principal
    const contInit = document.createElement("div");
    contInit.className = "contInit";
    contInit.setAttribute("id", "contInit");
    contPrincipal.appendChild(contInit);

    //creamos container header
    const contHeader = document.createElement("div");
    contHeader.className = "contHeader";
    contHeader.setAttribute("id", "contHeader");
    contInit.appendChild(contHeader);
    contHeader.innerHTML += `<div>
    <a title="Home" href="http://localhost:4500/"><img class="redSocialWelcome" src="https://i.ibb.co/zP4HX3M/logo14.png" alt="HomeRedSocial"></a>
                             </div>`

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += ` <h2>Inicio de Sesión</h2>
                            <input id="email2" type="correo" placeholder="Ingresa email"></br>
                            <input id="password2" type="pasword" placeholder="ingresa contraseña"></br>
                            <button id="boton2">Acceder</button>                     
                            <a id="newUser" href="#">Crea una Cuenta</a>
                            <h4>Accede con:</h4>
                            <button id="sigin">Google</button></br>
                            <button id ="authFB"> Facebook</button>`

    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
    contFooter.innerHTML += ` <h3>Creado por Geraldine, Marielys y Natalia, Laboratoria 2019</h3>`

    newUser = document.getElementById("newUser");
    newUser.addEventListener('click', () => {
        contInit.innerHTML = " "
        newRegt()
    })

    /*
        const userGoogle = document.getElementById("sigin")
        userGoogle.addEventListener('click', () => {
            buttonGoogle()
        })
    */
}