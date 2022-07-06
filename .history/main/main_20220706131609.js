desloguear = document.getElementById("botonDesloguear");

validarSesion();


function validarSesion() {
  if (localStorage.logged == "false") {
    location = "../login/login.html";
  }
}

desloguear.onclick = (e) => {
    localStorage.logged = false;
    validarSesion();
  };