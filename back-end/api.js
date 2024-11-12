import express from 'express';
import { estacoes } from './data.js';
const PORT = 8000;

const app = express();
app.use(express.json())

// EXIBE ESTACOES
app.get('/api/v1/estacoes', (_, res) => {
    res.json(estacoes);
});

// INSERE UMA ESTACAO
app.post('/api/v1/estacoes', (req, res) => {
    const estacao = req.body;
    estacoes.push(estacao);

    res.json(estacoes);
});

// FILTRA ESTACAO POR ID
app.get('/api/v1/estacoes/:id', (req, res) => {
    const id = req.params.id;
    const estacoesId = estacoes[id];

    res.json(estacoesId);
});

// DELETA UMA ESTACAO
app.delete('/api/v1/estacoes/:id', (req, res) => {
    const id = req.params.id;
    estacoes.splice(id, 1);

    res.json(estacoes);
});

// MODIFICA UMA ESTACAO
app.put('/api/v1/estacoes/:id', (req, res) => {
    const id = req.params.id;
    const estacao = req.body;

    estacoes[id] = estacao;

    res.json(estacoes);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});