// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyAxW0ZX1klHmQ4JfiYo_L4VVdaf8BOOq_A",
    authDomain: "",
    databaseURL: "https://progress-6b92a-default-rtdb.firebaseio.com",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "234616315547",
    appId: "1:234616315547:web:d0f2aab2f4e1c3938df03e",
    measurementId: "G-2XP435YJ0Y"
};

function captureAll(token) {
    localStorage.setItem("isLogin", token);
    document.getElementById("lBtn").innerHTML="Logout";
    document.getElementById("lBtn").onclick=function(){
        localStorage.clear();
        document.getElementById("lBtn").innerHTML="Login";
        document.getElementById("lBtn").onclick=function(){
            $("#exampleModal").modal('show');
        }
    };
}


function login() {
    var username = document.getElementById("user").value;
    var passValue = document.getElementById("pass").value;
    username="Tahmid-Mahmud";
    passValue="progress-6b92a";

    // Initialize Firebase
    firebaseConfig["authDomain"]=passValue+".firebaseapp.com";
    firebaseConfig["projectId"]=passValue;
    firebaseConfig["storageBucket"]=passValue+".appspot.com";
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // Accessiblity
    firebase.database().ref(username).on('value', function(snapshot){
        var password=snapshot.val().password;
        if (passValue==password){
            // document.getElementById("alert").style.display="block";
            $("#exampleModal").modal('toggle');
            captureAll(passValue[passValue.length-2]+passValue[passValue.length-1]);
        }else {
            console.log("Login failed");
            document.getElementById("error").style.display="inline-block";
        }
    });
}