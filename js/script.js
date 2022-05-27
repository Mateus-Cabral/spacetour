const botaoEnviar = document.getElementById("envioContato")

botaoEnviar.addEventListener("click", validaCampos)

function validaCampos(){

    const campos = document.querySelectorAll("input[type='text'],input[type='email'], input[type='date']")

    for(let x = 0; x < campos.length ; x++){
       
            if(campos[x].value == ""){
                alert("Por favor, preencha o campo " + campos[x].name + "!")
                return                
            }
    }
}

