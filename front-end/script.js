document.addEventListener('DOMContentLoaded', function () {
    const selectOrigem = document.getElementById('selectOrigem');
    const selectDestino = document.getElementById('selectDestino');
    const botaoCalcularRota = document.getElementById('calcularRota');
    const popupEstacao = document.getElementById('popupEstacao');
    const nomeEstacao = document.getElementById('nomeEstacao');
    const horarioEstacao = document.getElementById('horarioEstacao');
    const acessibilidadeEstacao = document.getElementById('acessibilidadeEstacao');
    const animaisEstacao = document.getElementById('animaisEstacao');
    const tarifaEstacao = document.getElementById('tarifaEstacao');
    const botaoConsulte = document.getElementById('consulte');

    // Função para carregar estações
    async function carregarEstacoes() {
        try {
            const response = await fetch('http://localhost:3000/api/estacoes');
            const estacoes = await response.json();

            preencherSelect(selectOrigem, estacoes);
            preencherSelect(selectDestino, estacoes);
            preencherSelect(document.getElementById('selectEstacoes'), estacoes);
        } catch (error) {
            console.error('Erro ao carregar estações:', error);
        }
    }

    // Função para preencher os selects
    function preencherSelect(selectElement, estacoes) {
        estacoes.forEach(estacao => {
            const option = document.createElement('option');
            option.value = estacao.nome;
            option.textContent = estacao.nome;
            selectElement.appendChild(option);
        });
    }

    // Função para exibir informações da estação selecionada
    function abrirPopup(estacao) {
        nomeEstacao.textContent = `Estação: ${estacao.nome}`;
        horarioEstacao.textContent = `Horário: ${estacao.horario}`;
        acessibilidadeEstacao.textContent = `Acessível: ${estacao.acessibilidade ? 'Sim' : 'Não'}`;
        animaisEstacao.textContent = `Permite Animais: ${estacao.permiteAnimais ? 'Sim' : 'Não'}`;
        tarifaEstacao.textContent = `Tarifa: R$ ${estacao.tarifa.toFixed(2)}`;
        popupEstacao.style.display = 'flex';
    }

    // Carregar estações ao iniciar
    carregarEstacoes();

    // Evento para fechar o popup de informações
    document.querySelector('.popupInformacoesEstacoes .close').addEventListener('click', function () {
        popupEstacao.style.display = 'none';
    });

    // Evento para calcular a rota entre origem e destino
    botaoCalcularRota.addEventListener('click', () => {
        const origem = selectOrigem.value;
        const destino = selectDestino.value;
        if (origem && destino && origem !== destino) {
            alert(`Rota de ${origem} para ${destino} calculada!`);
        } else {
            alert('Por favor, selecione uma origem e um destino diferentes.');
        }
    });

    // Evento para exibir informações da estação selecionada
    botaoConsulte.addEventListener('click', async () => {
        const selectEstacoes = document.getElementById('selectEstacoes');
        const estacaoSelecionada = selectEstacoes.value;
        const estacao = await fetch(`http://localhost:3000/api/estacoes`)
            .then(res => res.json())
            .then(data => data.find(estacao => estacao.nome === estacaoSelecionada));

        if (estacao) {
            abrirPopup(estacao);
        } else {
            alert('Estação não encontrada.');
        }
    });
});
