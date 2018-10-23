
Feature: Cadastrar novo usuario
  Como um novo usuario
  Gostaria de cadastrar
  Para assim conseguir logar

  Background:
    Given o app aberto
    When clico em Novo usuario

  Scenario Outline: Deve validar as regras de cadastro
    When informo um nome "<nome>"
    And informo o usuario "<usuario>"
    And informo a senha "<senha>"
    And clico em cadastrar
    Then valido mensagem "<mensagem>"

    Examples:
      | nome  | usuario     | senha | mensagem                       |
      | Schu  | schu@schu   | 123   | Endereço de email já utilizado |
      |       | schu@s      | 12    | Nome é um campo obrigatório    |
      | Teste | schu@s45    |       | Senha é um campo obrigatório   |
      | Teste |             | 123   | Email é um campo obrigatório   |
  @t2
    Scenario: Novo Usuario
      When informo os dados
      Then clico em cadastrar
      And valido mensagem