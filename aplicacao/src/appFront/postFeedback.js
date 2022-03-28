let resposta = document.getElementById("resposta");


function fazPost(url,body){
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function() {
        console.log(this.responseText);
        resposta.innerHTML = this.responseText;
    }

    return request.responseText;
}


function postFeedback() {
    event.preventDefault();
    let url = "http://localhost:8080/feedbacks";
    let usuario = document.getElementById("inputFeedUsuario").value;
    let data = document.getElementById("inputFeedData").value;
    let melhorar = document.getElementById("inputFeedMelhorar").value;
    let manter = document.getElementById("inputFeedManter").value;
    let sugestoes = document.getElementById("inputFeedSugest").value;
    let final = document.getElementById("inputFeedFinal").value;
    let remetente = document.getElementById("inputFeedRemet").value;

    body = {
        "usuario": usuario,
        "data": data,
        "pontosMelhorar": melhorar,
        "pontosManter": manter,
        "sugestoes": sugestoes,
        "feedbackFinal": final,
        "remetente": remetente
    }

    fazPost(url, body);
    
    
}
