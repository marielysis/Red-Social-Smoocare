export const newRegt = () => {
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
    <a title="Home" href="http://localhost:3000/"><img class="redSocialWelcome" src="https://i.ibb.co/zP4HX3M/logo14.png" alt="HomeRedSocial"></a>
                             </div>`

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += `<h4>Registro de Usuarios</h4>
                            <input id="email" type="correo" placeholder="Ingresa email">
                            <input id="password" type="pasword" placeholder="ingresa contraseña">
                            <button id="boton">Enviar</button> `

    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
    contFooter.innerHTML += ` <h3>Creado por Geraldine, Marielys y Natalia, Laboratoria 2019</h3>`

}