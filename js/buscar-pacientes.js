var botaAdicionar = document.querySelector("#buscar-pacientes"); 

botaAdicionar.addEventListener("click" , function() { 
  console.log("Buscando pacientes..");

  // Usando ajax para pegar dados do servidor
  var xhr = new XMLHttpRequest(); 
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load" , function() {
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
     erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
    //console.log(resposta);
    //console.log(typeof resposta); 

    var pacientes = JSON.parse(resposta);
    //console.log(pacientes);
    //console.log(typeof pacientes)

       pacientes.forEach( function(paciente) {
          adicionaPacienteNaTabela(paciente);
      });
      console.log("Deu certo")

    }else {
      console.log(xhr.status)
      console.log( xhr.responseText);
      
      erroAjax.classList.remove("invisivel")
    }
    
  });
  xhr.send()
})

