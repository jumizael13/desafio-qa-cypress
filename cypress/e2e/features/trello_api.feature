Feature: API Trello

  Scenario: Validar nome da lista de uma action
    Given que envio uma requisição GET para a API do Trello
    Then o status code da resposta deve ser 200
    And devo exibir o campo name da estrutura list