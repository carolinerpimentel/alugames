/*
 * Ao clicar no botão do jogo, deverá verificar se está alugado, trocar o texto do botão e mudar o visual do    
 * elemento.
*/

function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');  
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    // Altera o status dos elementos correspondentes ao botão clicado

    if(imagem.classList.contains('dashboard__item__img--rented')){
        // confirma a devolução do jogo
        if(confirm(`Tem certeza que deseja devolver ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';  
        } 
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';  
    }
}






