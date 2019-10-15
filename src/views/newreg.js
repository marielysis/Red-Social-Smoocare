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
    <a title="Home" href="http://localhost:4500/"><img class="redSocialWelcome" src="https://i.ibb.co/zP4HX3M/logo14.png" alt="HomeRedSocial"></a>
    </div>`

        //creamos container body
        const contBody = document.createElement("div");
        contBody.className = "contBody";
        contHeader.setAttribute("id", "contBody");
        contInit.appendChild(contBody);
        contBody.innerHTML += `<h4>Registro de Usuarios</h4>
                            <label>Nombre Completo:</label><input id="name" type= "text"></br>
                            <label>Email:</label><input id="email" type="correo"></br>
                            <label>Ingresa una Contraseña:</label><input id="password" type="pasword"></br>
                            <button id="boton">Enviar</button> `

        //creamos container footer
        const contFooter = document.createElement("div");
        contFooter.className = "contFooter";
        contFooter.setAttribute("id", "contFooter");
        contInit.appendChild(contFooter);
        contFooter.innerHTML += ` <h3>Creado por Geraldine, Marielys y Natalia, Laboratoria 2019</h3>`

        const btnEnviar = document.getElementById("boton")
        btnEnviar.addEventListener("click", () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
        })


    }
    /*
    const send = document.getElementById("register");
    send.addEventListener("click", () => {

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

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