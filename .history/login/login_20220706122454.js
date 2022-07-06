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
      error(email, "Debe ingresar un email");
      validate = false;
    } else if (!emailValido(email.value)) {
      error(email, "Debe ingresar un email valido");
      validate = false;
    } else if (email.value != "valeria@gmail.com") {
      error(email, "El email no coincide con ningun email registrado");
      validate = false;
    } else {
      validado(email);
    }
  
    if (contraseña.value === "" || contraseña.value === null) {
      error(contraseña, "Debe ingresar una contraseña");
      validate = false;
    } else if (contraseña.value != "lppa2022") {
      error(contraseña, "contraseña incorrecta");
      validate = false;
    } else {
      validado(contraseña);
    }
    
  
    return validacion;
  }

  const emailValido = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const error = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
  
    errorDisplay.innerText = message;
    errorDisplay.classList.add("active")
    errorDisplay.classList.remove("hidden")
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };
  
  const validado = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
  
    errorDisplay.innerText = "";
    errorDisplay.classList.add("hidden")
    errorDisplay.classList.remove("active")
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };