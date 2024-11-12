import { estacoes } from '../../back-end/data.js';

describe('Teste de Consulta de Estações', () => {
  it('Deve exibir todas as estações', () => {
    cy.intercept('GET', 'https://127.0.0.1:8000/api/v1/estacoes', {
      body: [
        { nome: "São Paulo - Morumbi", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Butantã", status: "Fechada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Faria Lima", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Taboão da Serra", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Vila Sônia", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Fradique Coutinho", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Oscar Freire", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Consolação", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Anhangabaú", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 }
      ]
    }).as('estacoesRequest');
  });
});

// Remover estação por id
describe('Teste de Remoção de Estação', () => {
  it('Deve remover uma estação', () => {
    cy.intercept('DELETE', 'https://127.0.0.1:8000/api/v1/estacoes/:1', {
      body: [
        { nome: "Butantã", status: "Fechada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Faria Lima", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Taboão da Serra", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Vila Sônia", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Fradique Coutinho", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Oscar Freire", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Consolação", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Anhangabaú", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 }
      ]
    }).as('estacoesRequest');
  });
});

// Modifica uma estação por id
describe('Teste de Modificação de Estação', () => {
  it('Deve modificar uma estação', () => {
    cy.intercept('PUT', 'https://127.0.0.1:8000/api/v1/estacoes/:1', {
      body: [
        { nome: "São Paulo - Morumbi", status: "Fechada", horario: "12:00", acessibilidade: true, permiteAnimais: true, tarifa: 6.0 },
        { nome: "Butantã", status: "Fechada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Faria Lima", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Taboão da Serra", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Vila Sônia", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Fradique Coutinho", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Oscar Freire", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Consolação", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
        { nome: "Anhangabaú", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 }
      ]
    }).as('estacoesRequest');
  });
});