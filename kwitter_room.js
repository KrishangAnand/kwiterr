
var firebaseConfig = {
  
    apiKey: "AIzaSyAs5RS9wKPhiPDpSlBpol3v43j2ivKbpBI",
    authDomain: "kwitter-2f3a2.firebaseapp.com",
    databaseURL: "https://kwitter-2f3a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-2f3a2",
    storageBucket: "kwitter-2f3a2.appspot.com",
    messagingSenderId: "862023583379",
    appId: "1:862023583379:web:0a0d81db19adf285b5ef66",
};



  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
