/*
 * Ao clicar no botão do jogo, deverá verificar se está alugado, trocar o texto do botão e mudar o visual do    
 * elemento.
 */ 

// altera o status do botão clicado para alugar ou devolver

function alterarStatus(jogo){
    let botao = document.getElementById(`btn-alugar-${jogo === 1 ? 'monopoly' : jogo === 2 ? 'ticket-to-ride' : 'takenoko'}`)
    let txtBotao = botao.innerText;

    if(txtBotao === 'Devolver'){
        botao.innerHTML = 'Alugar';  
        botao.classList.remove('dashboard__item__button--return');      
    } else {
        botao.innerHTML = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }   
}





