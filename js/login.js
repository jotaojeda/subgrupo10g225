document.getElementById("ok").addEventListener("click", function() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password ){
    
        window.location = "index.html";
    
    }else{
        alert("Ingrese los datos correctamente.")
        window.location = "login.html";
    }
     
    
    })