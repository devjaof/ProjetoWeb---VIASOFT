const usuario = document.getElementById("inputFeedUsuario").value;
const data = document.getElementById("inputFeedData").value;
const melhorar = document.getElementById("inputFeedMelhorar").value;
const manter = document.getElementById("inputFeedManter").value;
const sugestoes = document.getElementById("inputFeedSugest").value;
const remetente = document.getElementById("inputFeedRemet").value;

const btn = document.getElementById("btn");

btn.onclick = function() {
    console.log(usuario);
}