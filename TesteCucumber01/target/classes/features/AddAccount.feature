@t3
Feature: Adicionar nova conta
  Com o login efetuado
  Gostaria de adicionar uma nova conta
  Para pagar o aluguel

  Background:
    Given o app aberto
    When  entro com login valido
    And seleciono o campo contas
    Then  clico em adicionar

  Scenario: Deve validar cenário de sucesso
    When Informo o nome da conta valida
    And clico em salvar
    Then valido mensagem de sucesso

  Scenario Outline: Deve validar as regras de Contas
    And  informo o nome da conta "<nomeconta>"
    And  clico em salvar
    Then valido mensagem contas "<mensagem>"

    Examples:

      | nomeconta      | mensagem                           |
      |                | Informe o nome da conta            |
      | conta repetida | Já existe uma conta com esse nome! |
