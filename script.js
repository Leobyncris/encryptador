/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


function encriptar() {
    const mensajeOriginal = document.getElementById("mensaje").value;

    if (mensajeOriginal.length === 0) {
        swal("Opps!", "Debes ingresar un texto", "warning");
        return;
    }

    const reemplazos = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const mensajeCodificado = mensajeOriginal.replace(/[eiou]/gim, match => reemplazos[match]);

    const mensajeEncriptado = document.getElementById("mensaje-encriptado");
    mensajeEncriptado.style.backgroundImage = "none";
    mensajeEncriptado.style.display = "block";
    mensajeEncriptado.textContent = mensajeCodificado;

    document.getElementById("titulo-mensaje").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
    document.getElementById("mensaje").value = "";
}


  function desencriptar() {
    const mensajeOriginal = document.getElementById("mensaje").value;
    

    if (mensajeOriginal.length === 0) {
        swal("Oops!", "Debes ingresar un texto", "warning");
        return;
    }

    const reemplazos = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let mensajeDecodificado = mensajeOriginal;
    for (const clave in reemplazos) {
        if (reemplazos.hasOwnProperty(clave)) {
            const valor = reemplazos[clave];
            mensajeDecodificado = mensajeDecodificado.replace(new RegExp(clave, 'gim'), valor);
        }
    }

    const mensajeEncriptado = document.getElementById("mensaje-encriptado");
    mensajeEncriptado.style.display = "block";
    mensajeEncriptado.textContent = mensajeDecodificado;
    mensajeEncriptado.style.backgroundImage = "none";

    document.getElementById("titulo-mensaje").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
    document.getElementById("mensaje").value = "";
}



function copiarTexto() {
    const elemento = document.getElementById("mensaje-encriptado");
    const texto = elemento.textContent.trim();

    if (texto.length > 0) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                swal("Info", "El texto fue copiado con éxito", "info");
            })
            .catch((err) => {
                swal("Oops!", "No se pudo copiar el texto", "error");
            });
    } else {
        swal("Oops!", "El elemento está vacío y no puede copiarse", "error");
    }
}


// Función para limpiar los campos
function limpiar() {
    const mensajeInput = document.getElementById("mensaje");
    const mensajeEncriptado = document.getElementById("mensaje-encriptado");

    if (mensajeInput && mensajeEncriptado) {
        mensajeInput.value = "";
        mensajeEncriptado.textContent = "";

        const elementosMostrados = ["titulo-mensaje", "parrafo", "mensaje-encriptado"];
        elementosMostrados.forEach((elementoId) => {
            const elemento = document.getElementById(elementoId);
            if (elemento) {
                elemento.style.display = "block";
            }
        });
        mensajeEncriptado.style.backgroundImage = "url(./img/Muñeco.png)";

        // Llama a la función de reinicio aquí
      
    }
}




