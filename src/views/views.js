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
                             <a title="Home" href="../src/index.html"><img class="redSocialWelcome" src="logo" alt="HomeRedSocial">logo</a>
                             </div>`

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += `<h4>Ingreso de Usuario</h4>
                            <input id="email2" type="correo" placeholder="Ingresa email">
                            <input id="password2" type="pasword" placeholder="ingresa contraseña">
                            <button id="boton2">Acceder</button>`

    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);



}