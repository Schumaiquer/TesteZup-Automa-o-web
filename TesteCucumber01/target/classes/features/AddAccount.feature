@t3
  Feature: Adicionar conta
    Como um usuario
    Gostaria de adicionar conta
    Para ter um controle de gastos

  Background:
    Given o app aberto
    When informo um usuario e senha
    And Clico em entrar
    And Clico em Contas
    And Clico em Adicionar

    Scenario: Conta valida
      Given um nome de conta
      When Clico em salvar
      Then valido mensagem "Conta adicionada com sucesso!"

    Scenario Outline: Deve validar regras de criacao de conta

      When informo uma conta "<conta>"
      And Clico em salvar
      Then valido mensagem "<mensagem>"

      Examples:
        | conta  | mensagem                          |
        |        | Informe o nome da conta           |
        | teste2 | Já existe uma conta com esse nome!|

