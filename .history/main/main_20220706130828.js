desloguear = document.getElementById("botonDesloguear");

validarSesion();


function validarSession() {
  if (localStorage.logged == "false") {
    location = "../login/login.html";
  }
}

desloguear.onclick = (e) => {
    localStorage.logged = false;
    validarSession();
  };