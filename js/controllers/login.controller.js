import { productServices } from "../services/product-services.js";
const login = document.querySelector("[data-login]")

login.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector("[data-email]").value
    const password = document.querySelector("[data-password]").value
    loginCheckIn(email, password);
})

const usuarios = []
productServices.loginData().then( (data) => {
    data.forEach((usuario) => {
        usuarios.push({
            email: usuario.email,
            password: usuario.password,
            id: usuario.id
        })
    })
    return usuarios
})

function loginCheckIn(email, password) {
    for(let i = 0; i < usuarios.length ; i++) {
        if (usuarios[i].email == email && usuarios[i].password == password) {
          return window.location.href = "/AluraGeek/screens/productos.html";
        }
    }
    const error = document.querySelector(".input-login-error")
    error.classList.add("fail")
    setTimeout(() => {
        error.classList.remove("fail")
      }, 3000)
}


