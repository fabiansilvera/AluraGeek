 const loginData = async () => {
    const response = await fetch("https://alurageek-fabian.herokuapp.com/usuario");
     return await response.json();
}

 const listaProductos = async () => {
    const response = await fetch("https://alurageek-fabian.herokuapp.com/producto");
     return await response.json();
}

const crearProducto = (url, categoria, nombre, precio, descripcion) => {
    return fetch("https://alurageek-fabian.herokuapp.com/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, nombre, precio, descripcion, id: uuid.v4()})
    })
}

const eliminarProducto = (id) => {
    return fetch(`https://alurageek-fabian.herokuapp.com/producto/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = async (id) => {
    const respuesta = await fetch(`https://alurageek-fabian.herokuapp.com/producto/${id}`);
    return await respuesta.json();
}

const actualizarProducto = async (url, categoria, nombre, precio, descripcion,id) => {
    try {
        const respuesta = await fetch(`https://alurageek-fabian.herokuapp.com/producto/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url, categoria, nombre, precio, descripcion }),
        });
        return console.log(respuesta);
    } catch (err) {
        console.log(err);
    }
}
export const productServices = {
    loginData,
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}


