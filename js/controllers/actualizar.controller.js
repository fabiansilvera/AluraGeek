import { productServices } from "../services/product-services.js";

const obetenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null) {
        window.location.href = "../index.html"
    }

    const productUrl = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    productServices.detalleProducto(id).then((product) => {
        productUrl.value = product.url;
        nombre.value = product.nombre;
        precio.value = product.precio;
        descripcion.value = product.descripcion;

        if (product.url == undefined) {
                window.location.href = "../index.html";
        }
    })
}

obetenerInformacion();  

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    const productUrl = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("#productoCategoria");
    if (categoria.value == "--Seleccionar categoria--") {
        categoria.classList.add("fail");
        return
    }
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productServices.actualizarProducto(productUrl, categoria.value, nombre, precio, descripcion,id).then( (respuesta) => {
        window.location.href = "/AluraGeek/screens/productos.html";
    }).catch(err => console.log(err));
})


