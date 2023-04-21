function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="Angel" && pass=="4455"){
    alert("Usuario y contraseña validos");
    window.location="index.html";
    
} else {
    alert("Intenta de Nuevo");
}
} 