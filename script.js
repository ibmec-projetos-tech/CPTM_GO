// Função para abrir popup de informações das estações
// ao clicar no botão da página principal
document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.popupInformacoesEstacoes .close');
    var openButton = document.getElementById('consulte');
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