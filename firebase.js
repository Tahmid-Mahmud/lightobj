// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxW0ZX1klHmQ4JfiYo_L4VVdaf8BOOq_A",
    authDomain: "progress-6b92a.firebaseapp.com",
    databaseURL: "https://progress-6b92a-default-rtdb.firebaseio.com",
    projectId: "progress-6b92a",
    storageBucket: "progress-6b92a.appspot.com",
    messagingSenderId: "234616315547",
    appId: "1:234616315547:web:d0f2aab2f4e1c3938df03e",
    measurementId: "G-2XP435YJ0Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var sub=["Mathematics", "English", "Science"];

function captureAll(token) {
    for (let i = 0; i < sub.length; i++) {
        firebase.database().ref(token+" - Subject/"+sub[i]).on('value', function(snapshot){
            var all = snapshot.val();
            console.log("title is: "+all.title);
            console.log("descript is: "+all.description);
        });
    };
}

function login() {
    var username = document.getElementById("user").value;
    var passValue = document.getElementById("pass").value;
    username="Tahmid-Mahmud";
    passValue="t@hmid_lightobj"
    firebase.database().ref(username).on('value', function(snapshot){
        var password=snapshot.val().password;
        if (passValue==password){
            document.getElementById("alert").style.display="block";
            $("#exampleModal").modal('toggle');
            captureAll(passValue);
        }else {
            console.log("Login failed");
        }
    });
}