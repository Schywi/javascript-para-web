var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("click" , function(event) {

  event.target.parentNode.classList.add("fadeOut")
  /*var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;

  paiDoAlvo.remove()*/
  setTimeout(function() {
    event.target.parentNode.remove()
  }, 500)
  
})







/*
// Adicionando evento para remover
pacientes.forEach( function(paciente) {
  paciente.addEventListener( "dblclick", function() {
    console.log("Fui clicado com um mouse");
    this.event.target.textContent
  })
})

//Fim evento remover
*/
