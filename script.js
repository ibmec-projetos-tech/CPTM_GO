import { estacoes } from './data.js';

// // Função para abrir popup de informações das estações
// // ao clicar no botão da página principal
// document.addEventListener('DOMContentLoaded', function() {
//     var closeButton = document.querySelector('.popupInformacoesEstacoes .close');
//     var openButton = document.getElementById('consulte');
//     var popup = document.querySelector('.popupInformacoesEstacoes');

//     // Abrir popup
//     openButton.addEventListener('click', function() {
//         popup.style.display = 'flex';
//     });

//     // Fechar popup
//     closeButton.addEventListener('click', function() {
//         popup.style.display = 'none';
//     });
// });

// Função para abrir popup de informações das estações
// ao clicar no ícone de situação das estações na página de rotas
document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.popupInformacoesEstacoes .close');
    var openButton = document.getElementById('iconeEstacao');
    var popup = document.querySelector('.popupInformacoesEstacoes');

    // Abrir popup
    openButton.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    // Fechar popup
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

// Função para abrir popup de envio de email
document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.popupEntreEmContato .close');
    var openButton = document.getElementById('entreEmContato');
    var popup = document.querySelector('.popupEntreEmContato');

    // Abrir popup
    openButton.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    // Fechar popup
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selectOrigem = document.querySelector('.conteinerOrigem select');
    const selectDestino = document.querySelector('.conteinerDestino select');
    const selectInformacoes = document.getElementById('selectEstacoes');

    // Função para adicionar as estações ao select
    function preencherSelect(selectElement) {
        estacoes.forEach(estacao => {
            const option = document.createElement('option');
            option.value = estacao.nome;
            option.textContent = estacao.nome;
            selectElement.appendChild(option);
        });
    }

    // Preencher os selects de origem e destino
    preencherSelect(selectOrigem);
    preencherSelect(selectDestino);
    preencherSelect(selectInformacoes);
    });


document.addEventListener('DOMContentLoaded', function () {
const selectEstacoes = document.getElementById('selectEstacoes'); // Select de estações
const botaoConsulte = document.getElementById('consulte'); // Botão "Consulte"
const popup = document.getElementById('popupEstacao'); // Popup de informações
const closeButton = popup.querySelector('.close'); // Botão de fechar a popup

// Elementos dentro da popup para exibir as informações
const nomeEstacao = document.getElementById('nomeEstacao');
const horarioEstacao = document.getElementById('horarioEstacao');
const acessibilidadeEstacao = document.getElementById('acessibilidadeEstacao');
const animaisEstacao = document.getElementById('animaisEstacao');
const tarifaEstacao = document.getElementById('tarifaEstacao');

// Função para preencher o select com as estações
function preencherSelect(selectElement) {
    estacoes.forEach((estacao) => {
        const option = document.createElement('option');
        option.value = estacao.nome;
        option.textContent = estacao.nome;
        selectElement.appendChild(option);
    });
}

// Função para abrir a popup com as informações da estação selecionada
function abrirPopup() {
const estacaoSelecionada = estacoes.find(
    (estacao) => estacao.nome === selectEstacoes.value
);

if (estacaoSelecionada) {
    nomeEstacao.textContent = `Estação: ${estacaoSelecionada.nome}`;
    horarioEstacao.textContent = `Horário: ${estacaoSelecionada.horario}`;
    acessibilidadeEstacao.textContent = `Acessível: ${
    estacaoSelecionada.acessibilidade ? 'Sim' : 'Não'
    }`;
    animaisEstacao.textContent = `Permite Animais: ${
    estacaoSelecionada.permiteAnimais ? 'Sim' : 'Não'
    }`;
    tarifaEstacao.textContent = `Tarifa: R$ ${estacaoSelecionada.tarifa.toFixed(2)}`;

    popup.style.display = 'flex'; // Exibe a popup
}
}

// Fechar a popup ao clicar no botão de fechar
closeButton.addEventListener('click', function () {
popup.style.display = 'none';
});

// Abrir a popup ao clicar no botão "Consulte"
botaoConsulte.addEventListener('click', abrirPopup);

});