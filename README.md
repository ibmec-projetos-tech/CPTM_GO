# CPTM_GO

CPTM Go - WebApp da Companhia Paulista de Trens Metropolitanos
Descrição do Projeto

CPTM Go é uma aplicação web desenvolvida para melhorar a experiência dos usuários que utilizam o sistema de trens metropolitanos de São Paulo. O projeto foi criado por alunos do Ibmec-BH como um webapp moderno e responsivo que resolve os principais problemas identificados no aplicativo atual da CPTM, como a baixa usabilidade, funcionalidade fragmentada e falta de otimização para dispositivos móveis.

Este projeto foca em:

	•	Oferecer informações em tempo real e precisas sobre as estações de trem, horários e rotas.
	•	Proporcionar uma experiência simplificada para os usuários planejarem suas viagens, acessarem informações sobre as estações e entrarem em contato com o atendimento ao cliente da CPTM.

Problema Resolvido:

O projeto resolve vários problemas de usabilidade identificados no aplicativo móvel atual da CPTM, como:

	•	Fluxo de navegação ruim e inconsistência no design.
	•	Falta de atualizações em tempo real sobre estações e horários.
	•	Problemas de compatibilidade com dispositivos móveis.

Requisitos Funcionais para o Semestre

	1.	Funcionalidade de Planejamento de Viagens:
	•	Permitir que os usuários selecionem suas estações de origem e destino.
	•	Fornecer opções de rotas otimizadas, incluindo status das estações.
	2.	Informações sobre as Estações:
	•	Exibir detalhes sobre as estações, como acessibilidade, serviços disponíveis, horários e tarifas.
	3.	Comunicação com a CPTM:
	•	Oferecer opções de contato direto (telefone, WhatsApp, email) para os usuários entrarem em contato com o atendimento da CPTM.

Testes Unitários

	•	Planejamento de Viagens: Testar a precisão das rotas e exibição do status das estações.
	•	Informações das Estações: Garantir que os dados corretos sejam exibidos para as estações selecionadas (ex.: nome, status, horários).
	•	Funcionalidade de Popups: Validar que os popups para informações das estações, formulários de contato e interações do usuário funcionem corretamente em diferentes navegadores e dispositivos.
	•	Responsividade: Assegurar que o webapp mantenha sua funcionalidade e estética em diferentes tamanhos de tela e dispositivos.

Base de Dados

Será utilizada uma base de dados simples em JSON para armazenar informações sobre as estações, suas respectivas linhas, status e horários de funcionamento. Exemplo de estrutura:

{
  "estacoes": [
    {
      "nome": "São Paulo - Morumbi",
      "status": "Aberta",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Butantã",
      "status": "Fechada",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Faria Lima",
      "status": "Interditada",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Taboão da Serra",
      "status": "Aberta",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Vila Sônia",
      "status": "Aberta",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Fradique Coutinho",
      "status": "Aberta",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Oscar Freire",
      "status": "Aberta",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Consolação",
      "status": "Interditada",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    },
    {
      "nome": "Anhangabaú",
      "status": "Aberta",
      "horario": "10:00",
      "acessibilidade": true,
      "permiteAnimais": false,
      "tarifa": 5.00
    }
  ]
}

Integração com API

	•	Google Maps API: Para visualização de rotas e fornecimento de serviços baseados em geolocalização para os usuários.

Responsabilidades do Grupo

	•	[Gabriel Marcolino e Mateus Fenoci] ficará encarregado do desenvolvimento do Back-End e da integração com APIs externas.
	•	[Rafael Lacerda e Matheus] será o responsável pelo gerenciamento do banco de dados e pela execução de testes unitários para garantir a funcionalidade do sistema.


Convenções de Nomenclatura

	•	Branches: Seguir o formato feature/descrição, bugfix/descrição. Exemplo: feature/adicionar-planejador-de-viagem.
	•	Mensagens de Commit: As mensagens de commit devem estar no tempo presente e começar com um verbo de ação. Exemplo: “Adiciona funcionalidade de planejador de viagens” ou “Corrige bug na exibição do status da estação”.
	•	Pull Requests: Cada PR deve incluir uma descrição detalhada do que foi feito, qualquer problema que tenha resolvido e como testá-lo. Formato do título: [Tipo] Breve descrição, ex.: [Feature] Adicionar planejador de viagens.
