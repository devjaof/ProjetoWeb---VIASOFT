
const inputBuscas = document.getElementById("inputBuscas");
const checkUsuario = document.getElementById("porUsuario");
const checkRemetente = document.getElementById("porRemetente");
const btnUsuario = document.getElementById("btnUsuario");
const btnRemetente = document.getElementById("btnRemetente");

// if por usuário, buscar pelo campo usuário no json
// if por remetente, buscar pelo campo remetente no json

const pegaTexto = function () {
  var text = document.getElementById("inputBuscas").value;
}

const pegaFeedbacks = function(id) {
  var feedbacksURL = 'http://localhost:8080/feedbacks/';
  var request = new XMLHttpRequest();
  request.open('GET', feedbacksURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var feedbacks = request.response;
    populate
    ("Usuário: " + feedbacks[id].usuario + " | " +
    "Data: " + feedbacks[id].data + " | " +
    "Pontos a Melhorar: " + feedbacks[id].pontosMelhorar + " | " +
    "Pontos a Manter: " + feedbacks[id].pontosManter + " | " +
    "Feedback Final: " + feedbacks[id].feedbackFinal + " | " +
    "Remetente: " + feedbacks[id].remetente);
  }

  function populate(jsonObj) {
    var novo = document.createElement('li');
    var feedback = document.getElementById('feedback');
  
    novo.textContent = JSON.stringify(jsonObj);
    feedback.appendChild(novo);
  } 
}

btnRemetente.onclick = function () {
  pegaFeedbacks(0);
}

//inputBuscas.addEventListener('input', event => {
//  console.log(event.target.value.trim())
//})








