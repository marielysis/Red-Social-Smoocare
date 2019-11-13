import { createUser } from '/assets/js/auth.js';

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
    contHeader.innerHTML += `<div class= "logo">
    <a title="Home" href="http://localhost:4500/"><img class="redSocialWelcome" src="assets/imagen/logo14.png" alt="HomeRedSocial"></a>
                             </div>`

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += `<h4>Registro de Usuarios</h4>
                            <div class= "formNewUser">
                            <label>Nombre Completo:</label><input id="name" type= "text"></br>
                            <label>Email:</label><br><input id="email" type="correo"></br>
                            <label>Ingresa una Contraseña:</label><br><input id="password" type="pasword"></br>
                            </div>

                            <div class="initnewP">
                            <button id="enviar2" class="btnSiginP">Enviar</button> 
                            </div>`


    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
    contFooter.innerHTML += ` <h3>Creado por Geraldine, Marielys y Natalia, Laboratoria 2019</h3>`

    const login = () => {
        const name = document.getElementById("name")
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        createUser(email, password, name);

    }

    const crearCuenta=document.getElementById("enviar2");
    crearCuenta.addEventListener("click",()=>{
      
        login();
    })

}

/*


    const divContainer2 = document.getElementById('root1');
    const divContainer3 = document.getElementById('root2');

    let printValidation = valideImput(email, password, name)


    if (printValidation == true) {
        divContainer2.innerHTML += "llena los campos"
    } else if (printValidation == false) {
        divContainer2.innerHTML += "Todo listo"
    }

    let printValidationEmail = validEmail(email)
    if (printValidationEmail == true) {
        divContainer3.innerHTML += "Correo valido"
    } else {
        divContainer3.innerHTML += "Correo invalido"
    }

    validPassword(password)
    createUser(email, password);
})*/