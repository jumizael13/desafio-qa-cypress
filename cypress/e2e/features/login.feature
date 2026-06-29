Feature: Login

  Como um usuário cadastrado
  Quero realizar login na aplicação
  Para acessar minha conta

Scenario: Realizar login com sucesso
    Given que acesso a página de login
    When informo um e-mail válido
    And informo uma senha válida
    And clico no botão Login
    Then o login deverá ser realizado com sucesso