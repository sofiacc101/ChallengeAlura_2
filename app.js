function encryptText() {
    let input = document.getElementById('mi__input').value;
    if (!input) return;

    let encryptedText = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('id_container__salida_mensaje').style.display = 'none';
    document.getElementById('container__salida_result').style.display = 'block';
    document.getElementById('result').innerHTML = `<p>${encryptedText}</p>`;
}

function decryptText() {
    let input = document.getElementById('mi__input').value;
    if (!input) return;

    let decryptedText = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('id_container__salida_mensaje').style.display = 'none';
    document.getElementById('container__salida_result').style.display = 'block';
    document.getElementById('result').innerHTML = `<p>${decryptedText}</p>`;
}

function copyText() {
    document.getElementById('id_container__salida_mensaje').style.display = 'none';

    document.getElementById('container__salida_result').style.display = 'block';

    let result = document.getElementById('result').innerText;
    if (!result) return;

    navigator.clipboard.writeText(result)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(err => alert("Error al copiar texto: ", err));
}
