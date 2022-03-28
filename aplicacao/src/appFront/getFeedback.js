const inputBuscas = document.getElementById("inputBuscas");
const checkRemetente = document.getElementById("porRemetente");
const btnUsuario = document.getElementById("btnUsuario");
const btnRemetente = document.getElementById("btnRemetente");


function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  
  return request.responseText
}

function criaLinha(feedback) {
  let linha = document.createElement("tr"); 
  let tdUsuario = document.createElement("td"); 
  let tdData = document.createElement("td"); 
  let tdMelhorar = document.createElement("td");
  let tdManter = document.createElement("td");  
  let tdFinal = document.createElement("td"); 
  let tdRemetente = document.createElement("td");

   tdUsuario.innerHTML = feedback.usuario;
   tdData.innerHTML = feedback.data;
   tdMelhorar.innerHTML= feedback.pontosMelhorar;
   tdManter.innerHTML = feedback.pontosManter;
   tdFinal.innerHTML = feedback.feedbackFinal;
   tdRemetente.innerHTML = feedback.remetente;  

   linha.appendChild(tdUsuario);
   linha.appendChild(tdData);
   linha.appendChild(tdMelhorar);
   linha.appendChild(tdManter);
   linha.appendChild(tdFinal);
   linha.appendChild(tdRemetente);

   return linha;
}

function buscaFeedbacksUsuario() {
  let tabela = document.getElementById('tabela');
  let data = fazGet("http://localhost:8080/feedbacks");
  let feedbacks = JSON.parse(data);

 
  var filtraUsuario = feedbacks.filter(function (el) {
    return el.usuario == inputBuscas.value;
  })

  filtraUsuario.forEach(element => {
    linha = criaLinha(element);
    tabela.appendChild(linha);
   
  })
}

function buscaFeedbacksRemetente() {
  let tabela = document.getElementById('tabela');
  let data = fazGet("http://localhost:8080/feedbacks");
  let feedbacks = JSON.parse(data);

  var filtraRemetente = feedbacks.filter(function (el) {
    return el.remetente == inputBuscas.value;
  })

  filtraRemetente.forEach(elemento => {
    linha = criaLinha(elemento);
    tabela.appendChild(linha);
  })
  
}

btnUsuario.onclick = function(){
  buscaFeedbacksUsuario();
}

btnRemetente.onclick = function(){
  buscaFeedbacksRemetente();
}