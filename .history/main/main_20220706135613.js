desloguear = document.getElementById("botonDesloguear");

validarSesion();
cargaDatos();

function validarSesion() {
  if (localStorage.logged == "false") {
    location = "./login.html";
  }
}

desloguear.onclick = (e) => {
    localStorage.logged = false;
    validarSesion();
  };

  function cargaDatos() {
    fetch("https://basic-server-one.vercel.app/users")
    .then(response => response.json())
    .then(users => tablaDatos(users.data))
  }
  
  function tablaDatos(users) {
      let tableBody = document.getElementById("tableBody")
      let output = ""
      for (const user of users) {
          output += `
           <tr>
           <td>${user.name}</td>
           <td>${user.address.city}</td>
           <td>${user.phone}</td>
           <td>${user.username}</td>
           <td>${user.email}</td>
           </tr>`
      }
      tableBody.innerHTML = output;
  }