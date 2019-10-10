let registry = () => {
    //console.log("diste un click");
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;

    //codigo copiado desde web firebase para registrar nuevos usuarios
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });

}