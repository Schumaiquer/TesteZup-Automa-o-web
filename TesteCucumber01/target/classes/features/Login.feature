@t1
Feature: Login
  Como um usuario
  Gostaria de acessar minha conta
  Para ter acesso a pagina

  Background:
    Given o app aberto

  Scenario Outline: Deve validar regras de login de contas
    When informo o usuario "<usuario>"
    And informo a senha "<senha>"
    And Clico em entrar
    Then valido mensagem "<mensagem>"

    Examples:
      | usuario   | senha | mensagem                         |
      | schu@schu | 123   | Bem vindo, schu!                 |
      | schu@schu | 12    | Problemas com o login do usuário |
      | schu@sdas | 123   | Problemas com o login do usuário |

  Scenario: Login vazio
    When Clico em entrar
    Then valido mensagem erro





