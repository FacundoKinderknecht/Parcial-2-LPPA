botonSubmit = document.getElementById("boton");
email = document.getElementById("email");
contraseña = document.getElementById("contraseña");

validarSesion();

function validarSesion() {
  if (localStorage.logged == "true") {
    location = "./main/main.html";
  }
}

botonSubmit.onclick = (e) => {
  e.preventDefault();

  if (validarInputs()) {
    logInRequest();
  }
};

function validarInputs() {

    validacion = true;
  
    if (email.value === "" || email.value === null) {
      setError(email, "Debe ingresar un email");
      validate = false;
    } else if (!emailValido(email.value)) {
      setError(email, "Debe ingresar un email valido");
      validate = false;
    } else if (email.value != "valeria@gmail.com") {
      setError(email, "El email no coincide con ningun email registrado");
      validate = false;
    } else {
      setSuccess(email);
    }
  
    if (contraseña.value === "" || contraseña.value === null) {
      setError(contraseña, "Debe ingresar una contraseña");
      validate = false;
    } else if (contraseña.value != "lppa2022") {
      setError(contraseña, "contraseña incorrecta");
      validate = false;
    } else {
      setSuccess(contraseña);
    }
    
  
    return validacion;
  }

  const emailValido = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}