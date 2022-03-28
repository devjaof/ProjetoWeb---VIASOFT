const btn = document.getElementById("btn");
btn.onclick = function fazLogin(){

const user = document.getElementById("user").value.toLowerCase();
const senha = document.getElementById("senha").value.toLowerCase();

if(user == "usuario1" && senha == "123" || user == "usuario2" && senha == "123") {
    window.location = "../views/addFeed.html"
}else {
    alert("Senha ou Usuário incorretos")
    }
}
