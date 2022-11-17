import { productServices } from "../services/product-services.js";
const table = document.querySelector("[data-table]");

const obetenerInformacion = () => {
    const url = new URL(window.location);
    const search = url.searchParams.get("search");

    if(search == "" || !search) {
        window.location.href = "../index.html"
    }
    
    productServices.listaProductos().then( (data) => {
        data.forEach(({url,categoria,nombre,precio,id}) => {
            if(RegExp(search.toLocaleLowerCase()).test(nombre.toLocaleLowerCase()) || search.toLowerCase() == categoria.toLowerCase()) {
                const nuevaLinea = crearLineaProducto(url,nombre,precio,id)
                table.appendChild(nuevaLinea);
            }
        });
    })
}

obetenerInformacion()

const crearLineaProducto = (url,nombre,precio,id) => {
    const linea = document.createElement("div");
    linea.classList.add("box--product");
    const contenido =
    `<a href="producto.html?id=${id}"><img class="product--img" src="../assets/img/${url}.png" alt="producto"></a>
    <p class="product--text">${nombre}</p>
    <p class="product--price">$${precio}</p>
    <a class="product--enlace" href="producto.html?id=${id}">Ver Producto</a>`;
    linea.innerHTML = contenido;

    return linea;
}
