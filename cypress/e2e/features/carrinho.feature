Feature: Carrinho de compras

  Scenario: Adicionar produto ao carrinho com sucesso
    Given que acesso a página inicial
    When clico no menu Products
    And pesquiso pelo produto "Blue Top"
    And adiciono o produto ao carrinho
    Then devo visualizar o produto "Blue Top" no carrinho