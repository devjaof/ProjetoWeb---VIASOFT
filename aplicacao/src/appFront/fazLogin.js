const btn = document.getElementById("btn");
btn.onclick = function fazLogin(){

const user = document.getElementById("user").value.toLowerCase();
const senha = document.getElementById("senha").value.toLowerCase();

if(user == "joao" && senha == "123" || user == "laura" && senha == "123") {
    window.location = "../views/feedbacks.html"
}else {
    alert("Senha ou Usuário incorretos")
    }
}
