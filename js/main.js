import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    })
})

const searchForm = document.querySelector(".search__form") ;
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector(".main__searchInput").value
    if (input == "") {
        return
    }
    window.location.href = `/AluraGeek/screens/BuscadorProductos.html?search=${input}`;
})