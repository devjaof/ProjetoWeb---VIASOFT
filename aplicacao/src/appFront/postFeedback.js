var usuario = document.getElementById("inputFeedUsuario");
var data = document.getElementById("inputFeedData");
var melhorar = document.getElementById("inputFeedMelhorar");
var manter = document.getElementById("inputFeedManter");
var sugestoes = document.getElementById("inputFeedSugest");
var final = document.getElementById("inputFeedFinal");
var remetente = document.getElementById("inputFeedRemet");

var ajax = new XMLHttpRequest();

ajax.onload = function () {
    const resposta = document.getElementById("resposta");
    resposta.innerHTML = this.responseText;
};

ajax.open("POST", "http://localhost:8080/feedbacks", true);

ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

const btn = document.getElementById("btn");

btn.onclick = function (){
 
    var xyz = (JSON.parse(JSON.stringify({
        "remetente":remetente.value,
        "usuario": usuario.value,
        "data": data.value,
        "pontosMelhorar": melhorar.value,
        "pontosManter": manter.value,
        "sugestoes": sugestoes.value,
        "feedbackFinal": final.value
    })));

    ajax.send(xyz)
    console.log(typeof(xyz), xyz)
}

