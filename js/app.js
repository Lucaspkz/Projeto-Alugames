let jogosAlugados = 0;

function contadorJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}

function alterarStatus(id){
    let cliqueDoJogo = document.getElementById(`game-${id}`);
    let imagem = cliqueDoJogo.querySelector(".dashboard__item__img");
    let botao = cliqueDoJogo.querySelector(".dashboard__item__button");
    let nomeJogo = cliqueDoJogo.querySelector(".dashboard__item__name");

    if(imagem.classList.contains("dashboard__item__img--rented")){

        if (confirm(`Tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            jogosAlugados--;
        }

    } else {

        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        jogosAlugados++;
    }
    contadorJogosAlugados();

}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contadorJogosAlugados();
});