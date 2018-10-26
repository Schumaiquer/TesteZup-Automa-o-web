@t4
Feature: Listar contas
  Com o login efetuado
  Gostaria de visualizar, editar/excluir contas
  Para organiza-las

  Background:
    Given o app aberto
    When entro com login valido
    And  seleciono o campo contas
    Then clico em listar

  Scenario: Deve validar regras de listar (edição)
    When  escolho opção de editar conta
    Given Informo o nome da conta valida
    And   clico em salvar
    Then  valido mensagem edição

  Scenario: Deve validar regras de listar (exclusão)
    When escolho opção de excluir conta
    Then valido mensagem exclusão

