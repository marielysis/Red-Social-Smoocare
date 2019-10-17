export const initFirebase = () => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA0mjnDO_QFPxd4n-tfPZJlcFdDD4mpVVA",
        authDomain: "redsocial-4874d.firebaseapp.com",
        databaseURL: "https://redsocial-4874d.firebaseio.com",
        projectId: "redsocial-4874d",
        storageBucket: "",
        messagingSenderId: "576134938057",
        appId: "1:576134938057:web:7164e3fa1e496e9d85bc18",
        measurementId: "G-NSNH3LLWF1"
    };
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}