import { productServices } from "../services/product-services.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.querySelector("#productoUrl").value;
    const categoria = document.querySelector("#productoCategoria")
    if (categoria.value == "--Seleccionar categoria--") {
        categoria.classList.add("fail");
        return
    }
    const nombre = document.querySelector("#productoNombre").value;
    const precio = document.querySelector("#productoPrecio").value;
    const descripcion = document.querySelector("#productoDescripcion").value;
    productServices.crearProducto(url,categoria.value,nombre,precio,descripcion).then( (respuesta) => {
        window.location.href = "/AluraGeek/screens/productos.html";
    }).catch(err => console.log(err));
})