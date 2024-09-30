/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.getElementById('Hermanito').addEventListener('submit', function () {
    event.preventDefault(); //impedir o envio do form

    const nome = document.Hermanito.nome.value;
    const cpf = document.Hermanito.cpf.value;
    const cartao = document.Hermanito.cartao.value;
    const senha = document.Hermanito.senha.value;
    const banco = document.Hermanito.banco.value;
    
    if (nome === "" || cpf === "" || cartao === "" || senha === "" || banco === "") {    
        document.getElementById("mensagemSaida").textContent = "Preencha todos os campos!";
        document.getElementById("mensagemSaida").style.color = "black";        
    } else {
        // Exibir mensagem de sucesso      
        document.getElementById("mensagemSaida").textContent = "Obrigado pela inscrição no Cassino Hermanito!";
        document.getElementById("mensagemSaida").style.color = "white";      
        // Limpar o formulário
        document.getElementById("Hermanito").reset();
    }
    
  })
 
