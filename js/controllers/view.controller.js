import { productServices } from "../services/product-services.js";

const obetenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const tablaSimilares = document.querySelector(".product__grid--container");

    if(id == null) {
        window.location.href = "../index.html"
    }

    productServices.detalleProducto(id).then((product) => {
        if (product.url == undefined) {
                window.location.href = "../index.html";
        }
        mostrarInformacion(product.url, product.nombre, product.precio ,product.descripcion);
        const categoriaProduct = product.categoria
        const idProducto = product.id

        productServices.listaProductos().then( (data) => {
            data.forEach(({url,categoria,nombre,precio,id}) => {
                let contador = 1
                if(categoriaProduct == categoria && idProducto != id && contador < 6) {
                const lineaSimilares = productosSimilares(url,nombre,precio,id)
                tablaSimilares.appendChild(lineaSimilares)
                contador++
                }
            });
        })
    })
}

obetenerInformacion(); 

const mostrarInformacion = (url, nombre, precio,descripcion) => {
    const tabla = document.querySelector(".producto__container");


    const linea =  document.createElement("div");
    linea.classList.add("producto__main")
    const contenido = `<img class="product__img" src="../assets/img/${url}.png" alt="Producto">
                <div class="producto__datos">
                    <h2 class="product__tittle">${nombre}</h2>
                    <p class="product__price">$${precio}</p>
                    <p class="product__text">${descripcion}</p>
                </div>`


    linea.innerHTML = contenido;
    tabla.appendChild(linea);
}


const productosSimilares = (url,nombre,precio,id) => {
    const similares = document.createElement("div");
    similares.classList.add("box--product");
    const contenidoSimilar =   `<a href="producto.html?id=${id}"><img class="product--img" src="../assets/img/${url}.png" alt="producto"></a>
                        <p class="product--text">${nombre}</p>
                        <p class="product--price">${precio}</p>
                        <a class="product--enlace" href="producto.html?id=${id}">Ver Producto</a>`

    similares.innerHTML = contenidoSimilar;
    return similares
}