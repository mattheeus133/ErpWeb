/*const btnCad =  document.getElementById('BtnCad')

btnCad.addEventListener("click", function(){

const senha = document.getElementById('InputsSenha')
const confSenha = document.getElementById('InputsConfSenha')



if(parseInt(senha.value) === 33 ){
    alert("Ok")
}else if(senha.value === confSenha.value){
    alert(senha.value)
}else{
    alert("Senha esta incorreta")
}

})

/*const btnMostra = document.querySelectorAll(".BtnMostra");
const senha = document.getElementById('InputsSenha');

btnMostra.addEventListener("click", function(event){
    event.preventDefault();

    if(senha.type === "password"){
        senha.type = "text";
    }else{
        senha.type ="password";
    }


})*

const btnMostra = document.querySelectorAll(".BtnMostra");

btnMostra.forEach((btn) => {
    btn.addEventListener("click", function(event){
        event.preventDefault();

        const senha = btn.previousElementSibling ; // Pega o input de senha correspondente
        /*A propriedade previousElementSibling no JavaScript retorna o elemento HTML anterior ao elemento atual dentro do mesmo pai (parent).

        📌 Resumindo: Ele encontra o irmão anterior do elemento no DOM, ignorando espaços em branco e textos.
        
        O elemento HTML anterior (ex: <input>)*



        
        if(senha.type === "password"){
            senha.type = "text";

        }else{
            senha.type = "password";
        }
    });
});

document.getElementById("BtnCad").addEventListener("click", function(event){
    event.preventDefault(); // evita que a pagina recarregue ao aperta o botão

const inputs = document.querySelectorAll('.InputsVerf');
let camposVazios = false; 

inputs.forEach((input) => {
    
    if(input.value === ""){
        camposVazios = true;
    }
});

if(camposVazios){
    alert("Todos os campos deve estar preenchidos");
}

});*/


document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("FormCad");
    const emailInput = document.getElementById("InputsEmail");
    const senhaInput = document.getElementById("InputsSenha");
    const confSenhaInput = document.getElementById("InputsConfSenha");
    const erroMsg = document.getElementById("ErroMsg"); 


form.addEventListener("submit", function (event){
    event.preventDefault();

    let email = emailInput.value.trim();
    let senha = senhaInput.value.trim();
    let confSenha = confSenhaInput.value.trim();

    if(email === "" || senha === "" || confSenha === ""){
        erroMsg.style.display = "block";
        return;
    }

    if(senha !== confSenha){
        erroMsg.textContent = "As senhas não coincidem";
        erroMsg.style.display = "block";
        return;
    }


    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Cadastro realizado com sucesso!");
    form.reset();
    erroMsg.style.display = "none";
    
    });
});