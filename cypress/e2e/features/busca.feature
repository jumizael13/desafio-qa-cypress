Feature: Busca de produtos

Scenario: Buscar produto com sucesso

Given que acesso a página inicial
When clico no menu Products
And pesquiso pelo produto "Blue Top"
Then devo visualizar o produto "Blue Top"