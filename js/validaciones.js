export function validar(input) {
    if(input.dataset.search == "") {
        return
    }
    const tipoDeInput = input.dataset.mensaje;

    if (input.validity.valid) {
        input.classList.remove("input__invalid");
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
    } else {
        input.classList.add("input__invalid");
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]) {
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}

const mensajeDeError = {
    name: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El nombre tiene un maximo de 40 caracteres"
    },
    email: {
        valueMissing: "Este correo no puede estar vacio",
        typeMismatch: "El correo no es valido",
        patternMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este Password no puede estar vacio",
        patternMismatch: "El Password no es valido"
    },
    url: {
        valueMissing: "Este campo no puede estar vacio",
    },
    price: {
        valueMissing: "El precio no puede estar vacio",
        patternMismatch: "Solo se permiten numeros"
    }
}

