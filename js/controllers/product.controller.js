import { productServices } from "../services/product-services.js";

const crearLineaProducto = (url,categoria,nombre,precio,id) => {
    const linea = document.createElement("div");
    linea.classList.add("box--product");
    const contenido =
    `<div class="productos--container">
        <div class="edicion__iconos">
            <img data-tacho id="${id}" src="../assets/img/Vectorbasura.svg" alt="img tacho">
            <a href="editarProducto.html?id=${id}"><img data-lapiz id="${id}" src="../assets/img/Vectorlapiz.svg" alt="img lapiz"></a>
        </div>
            <img class="product--img--edicion" src="../assets/img/${url}.png" alt="producto">
        </div>
                
        <p class="product--text">${nombre}</p>
        <p class="product--text">${categoria}</p>
        <p class="product--price">$${precio}</p>
        <a class="product--enlace" href="producto.html?id=${id}">Ver Producto</a>
    </div>`;
    linea.innerHTML = contenido;
    const tacho = linea.querySelector("[data-tacho]");
    tacho.addEventListener('click' , () => {
        const id = tacho.id;
        productServices.eliminarProducto(id).then( (respuesta) => {
            
        }).catch(err => alert("ocurrio un error"));
    })
    return linea;
}

const table = document.querySelector("[data-table]");

productServices.listaProductos().then((data) => {    
    data.forEach( ({url,categoria,nombre,precio,id}) => {
        const nuevaLinea = crearLineaProducto(url,categoria,nombre,precio,id)
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un error"));

