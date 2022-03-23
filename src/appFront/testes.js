const inputBuscas = document.getElementById("inputBuscas");
const checkUsuario = document.getElementById("porUsuario");
const checkRemetente = document.getElementById("porRemetente");
const btnUsuario = document.getElementById("btnUsuario");


  const pegaFeedbacks = function(id) {
    var feedbacksURL = 'http://localhost:8080/feedbacks/';

    var request = new XMLHttpRequest();
    request.open('GET', feedbacksURL);
    
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var feedbacks = request.response;
      populateSection("Usuário: " + feedbacks[id].usuario);
      populateSection("Data: " + feedbacks[id].data);
      populateSection("Pontos a Melhorar: " + feedbacks[id].pontosMelhorar);
      populateSection("Pontos a Manter: " + feedbacks[id].pontosManter);
      populateSection("Feedback Final: " + feedbacks[id].feedbackFinal);
      populateSection("Remetente: " + feedbacks[id].remetente);
    }

    function populateSection(jsonObj) {
      var feedback = document.createElement("li");
      var div = document.getElementById('feedback');
    
      feedback.textContent = JSON.stringify(jsonObj);
      div.appendChild(feedback);
    }   
  }
 

  btnUsuario.onclick = function() {
    if(checkUsuario.check == true) {
      pegaFeedbacks(0);
    }
  }


//inputBuscas.addEventListener('input', event => {
//  console.log(event.target.value.trim())
//})








