//Crear usuario nuevo
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function() {
                verificar()
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
            })

    })
   


//Ingreso Usuario ya creado
const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () => {
    const email2 = document.getElementById('email2').value
    const password2 = document.getElementById('password2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

            // ...
        });
});
//Autentificacion de usuario
function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            aparece(user);
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(" existe usuario activo")

            // ...
        } else {
            // User is signed out.
            // ...
            console.log("no existe usuario activo")
        }
    });
}

function aparece(user) {
    const usuario = user;
    const contenido = document.getElementById("contenido");
    if (usuario.emailVerified) {
        contenido.innerHTML = `
        <p>Bienvenido!</p>
        <button onclick="cerrar()">Cerrar Seccion2</button>`;
    }

}
//cerrar sesion
function cerrar() {
    firebase.auth().signOut()
        .then(function() {
            console.log("saliendo")
        })
        .catch(function(error) {
            console.log(error);

        });
}
// Verificación por 
function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification()
        .then(function() {
            // Email sent.
            console.log("enviando correo")
        })
        .catch(function(error) {
            // An error happened.
            console.log(error)
        });
}

const buttonGoogle= document.getElementById('sigin');
buttonGoogle.addEventListener('click', () => { 
    console.log("click")
    base_porvider= new firebase.auth.GoogleAuthProvider();
    authentication(base_porvider)

})
  //
//Autenticando con Firebase a través del objeto del proveedor de Google
function authentication(base_porvider){
    firebase.auth().signInWithPopup(base_porvider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(result);

    })
    .catch(function(error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);   
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential);
  
    });
}
    


observador()


  
