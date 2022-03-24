var usuario = document.getElementById("inputFeedUsuario");
var data = document.getElementById("inputFeedData");
var melhorar = document.getElementById("inputFeedMelhorar");
var manter = document.getElementById("inputFeedManter");
var sugestoes = document.getElementById("inputFeedSugest");
var remetente = document.getElementById("inputFeedRemet");

const btn = document.getElementById("btn");

var array = [usuario.value,
    data.value,
    melhorar.value,
    manter.value,
    sugestoes.value,
    remetente.value]  

btn.onclick = function (){
    console.log(array)
}