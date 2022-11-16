import { productServices } from "../services/product-services.js";

const starWars = document.querySelector("#starWars");
const consolas = document.querySelector("#consolas");
const diversos = document.querySelector("#diversos");

const crearLineaProducto = (url,nombre,precio,id) => {
    const linea = document.createElement("div");
    linea.classList.add("box--product");
    const contenido =
    `<a href="screens/producto.html?id=${id}"><img class="product--img" src="assets/img/${url}.png" alt="producto"></a>
    <p class="product--text">${nombre}</p>
    <p class="product--price">$${precio}</p>
    <a class="product--enlace" href="screens/producto.html?id=${id}"">Ver Producto</a>`;
    linea.innerHTML = contenido;

    return linea;
}

productServices.listaProductos().then((data) => {   
    let contadorProducto = 0
    let contadorConsolas = 0
    let contadorDiversos = 0

    data.forEach( ({url,categoria,nombre,precio,id}) => {
        const nuevaLinea = crearLineaProducto(url,nombre,precio,id)
        const categoriaProducto = categoria


        if (categoriaProducto == "productos" && contadorProducto < 6) {
            starWars.appendChild(nuevaLinea);
            contadorProducto++
        }
        if (categoriaProducto == "consolas" && contadorConsolas < 6) {
            consolas.appendChild(nuevaLinea);
            contadorConsolas++
        }
        if (categoriaProducto == "diversos" && contadorDiversos < 6) {
            diversos.appendChild(nuevaLinea);
            contadorDiversos++
        }
    });
}).catch((error) => alert("Ocurrio un error"));