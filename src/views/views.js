import { newRegt } from './newreg.js';
import { userGoogle, userFacebook } from '/user.js';

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
    contHeader.innerHTML += `<div class= "logo">
    <a title="Home" href="http://localhost:4500/"><img class="redSocialWelcome" src="https://i.ibb.co/zP4HX3M/logo14.png" alt="HomeRedSocial"></a>
                             </div>`

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += ` <h2 class="init" >Inicio de Sesión</h2>
                            <input id="email2" type="correo" placeholder="Ingresa email" class="form"></br>
                            <input id="password2" type="pasword" placeholder="ingresa contraseña" class="form"></br>
                            <button id="boton2" class="btnSigin">Acceder</button>                     
                            <a id="newUser" href="#">Crea una Cuenta</a>
                            <h4>Accede con:</h4>

                            <button id="google" class="buttonGoogle">Google</button></br>
                            <button id ="facebook" class="butonFB"> Facebook</button>`



    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
    contFooter.innerHTML += ` <h4>Creado por Geraldine, Marielys y Natalia, Laboratoria 2019</h3>`

    newUser = document.getElementById("newUser");
    newUser.addEventListener('click', () => {
        contInit.innerHTML = " "
        newRegt()
    })

    const userGoog = document.getElementById("google");
    userGoog.addEventListener("click", () => {

        userGoogle();

    })
    const userFace = document.getElementById("facebook");
    userFace.addEventListener("click", () => {

        userFacebook();

    })


    /*
        const userGoogle = document.getElementById("sigin")
        userGoogle.addEventListener('click', () => {
            buttonGoogle()
        })
    */
}