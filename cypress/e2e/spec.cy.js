import { estacoes } from '../../back-end/data.js';

describe('Teste de BackEnd', () => {
  it('Deve exibir todas as estações', () => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/v1/estacoes', {
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
  
  it('Deve exibir apenas a estação consultada', () => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/v1/estacoes/0', {
      body: [
        { nome: "São Paulo - Morumbi", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 }
      ]
    }).as('idEstacaoRequest');
  });

  it('Deve deletar apenas a estação indicada', () => {
    cy.intercept('DELETE', 'http://127.0.0.1:8000/api/v1/estacoes/0', {
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
    }).as('deleteEstacao');
  });

  it('Deve adicionar uma nova estação e retornar a lista atualizada', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/api/v1/estacoes', (req) => {
      expect(req.body).to.deep.equal({
        nome: "Nova Estação",
        status: "Aberta",
        horario: "08:00",
        acessibilidade: true,
        permiteAnimais: true,
        tarifa: 4.5
      });
      
      req.reply({
        statusCode: 200,
        body: [
          { nome: "São Paulo - Morumbi", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
          { nome: "Butantã", status: "Fechada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
          { nome: "Faria Lima", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
          { nome: "Taboão da Serra", status: "Aberta", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
          { nome: "Nova Estação", status: "Aberta", horario: "08:00", acessibilidade: true, permiteAnimais: true, tarifa: 4.5 }
        ]
      });
    }).as('inserirEstacao');

    cy.request({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/estacoes',
      body: {
        nome: "Nova Estação",
        status: "Aberta",
        horario: "08:00",
        acessibilidade: true,
        permiteAnimais: true,
        tarifa: 4.5
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.deep.include({
        nome: "Nova Estação",
        status: "Aberta",
        horario: "08:00",
        acessibilidade: true,
        permiteAnimais: true,
        tarifa: 4.5
      });
    });
  });

  it('Deve modificar uma estação existente e retornar a lista atualizada', () => {
    cy.intercept('PUT', 'http://127.0.0.1:8000/api/v1/estacoes/0', (req) => {
      expect(req.body).to.deep.equal({
        nome: "Estação Modificada",
        status: "Fechada",
        horario: "12:00",
        acessibilidade: false,
        permiteAnimais: true,
        tarifa: 6.0
      });
      
      req.reply({
        statusCode: 200,
        body: [
          { nome: "Estação Modificada", status: "Fechada", horario: "12:00", acessibilidade: false, permiteAnimais: true, tarifa: 6.0 },
          { nome: "Butantã", status: "Fechada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 },
          { nome: "Faria Lima", status: "Interditada", horario: "10:00", acessibilidade: true, permiteAnimais: false, tarifa: 5.0 }
        ]
      });
    }).as('modificarEstacao');

    cy.request({
      method: 'PUT',
      url: 'http://127.0.0.1:8000/api/v1/estacoes/0',
      body: {
        nome: "Estação Modificada",
        status: "Fechada",
        horario: "12:00",
        acessibilidade: false,
        permiteAnimais: true,
        tarifa: 6.0
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.deep.include({
        nome: "Estação Modificada",
        status: "Fechada",
        horario: "12:00",
        acessibilidade: false,
        permiteAnimais: true,
        tarifa: 6.0
      });
    });
  });

});
