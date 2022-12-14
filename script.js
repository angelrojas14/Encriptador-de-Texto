const textAreaIngresarTexto = document.querySelector(".textAreaIngresarTexto")
const textAreaMuestraMensaje = document.querySelector(".textAreaMuestraMensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(textAreaIngresarTexto.value)
    textAreaMuestraMensaje.value = textoEncriptado;
    textAreaIngresarTexto.value = ""
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textAreaIngresarTexto.value)
    textAreaMuestraMensaje.value = textoEncriptado;
    textAreaIngresarTexto.value = ""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function copiar(){
    textAreaMuestraMensaje.select()
    navigator.clipboard.writeText(textAreaMuestraMensaje.value)
    textAreaMuestraMensaje.value = ""
}