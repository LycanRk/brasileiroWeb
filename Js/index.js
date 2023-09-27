const times = document.querySelectorAll('.time');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
times.forEach((time) => {
    time.addEventListener('click', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

         // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
         removerSelecaoDoTime();

        time.classList.add('selecionado');

        //     OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

//         passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

         alterarImagemTimeSelecionado(time);

// passo 3 - alterar o nome do personagem grande
        alterarNomeTimeSelecionado(time);

    // passo 4 - alterar a descrição do personagem grande
     alterarDescricaoTime(time);
    })
})
function  alterarDescricaoTime(time) {
    const descricaoTime = document.getElementById('descricao-time');
    descricaoTime.innerText = time.getAttribute('data-description');
}

function alterarNomeTimeSelecionado(time) {
    const nomeTime = document.getElementById('nome-time');
    nomeTime.innerText = time.getAttribute('data-name');
}

function  alterarImagemTimeSelecionado(time) {
    const imagemJogadorGrande = document.querySelector('.jogador-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idTime = time.attributes.id.value;
    imagemJogadorGrande.src = `./imagenss/card-${idTime}.png`;
}

function removerSelecaoDoTime() {
    const timeSelecionado = document.querySelector('.selecionado');
    timeSelecionado.classList.remove('selecionado');
}
