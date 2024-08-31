let listaDeNumerosSorteados = [];
let numeroLimite = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//função para exibir os textos na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//mensagens principais
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 20');
}

//mensagem na tela
exibirMensagemInicial();

//verificando o chute com if e else
function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU!'); //mensagem exibida para o acerto
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //cálculo para as tentativas

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;//mensagem para tentativas
        exibirTextoNaTela('p', mensagemTentativas);//exibindo a msg das tentativas

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) { //exibindo as dicas
            exibirTextoNaTela('p', 'O número secreto é menor que o chute.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que o chute.');
        }
        tentativas++; //incrementando as tentativas
        limparCampo();
    }
}

//função para gerar um número aleatório novo, a cada vez que o jogo for iniciado
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes (numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

//limpando o campo do chute
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
//reiniciando o jogo, chamando a função de gerar um novo número para adivinhar e recomeçando as tentativas
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
