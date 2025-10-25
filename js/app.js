/*
 * Ao clicar no botão do jogo, deverá verificar se está alugado, trocar o texto do botão e mudar o visual do    
 * elemento.
 * 
 * 1- se o botão for igual a devolver, então a imagem deve mudar a aparência para acesa e o texto Devolver deve mudar para Alugar e tbm sua aparência,
 * se não (o texto do botão for igual a Alugar - só tem essa possibilidade) a imagem deve mudar a aparência para um pouco mais apagada e o texto do botão Alugar deve mudar para Devolver, assim como sua aparência
 */ 

/*
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
*/

function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let jogo = jogoClicado.querySelector('.dashboard__item__name');

    // Altera o status dos elementos correspondentes ao botão clicado

    if(botao.textContent === 'Devolver'){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';  
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';  
    }
}




