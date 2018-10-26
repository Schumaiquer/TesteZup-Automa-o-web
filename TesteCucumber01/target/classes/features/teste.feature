@t4
Feature: Adicionar conta
  Como um usuario
  Gostaria de adicionar conta
  Para ter um controle de gastos

  Background:
    Given o app aberto
    When informo um usuario e senha
    And Clico em entrar
    And Clico em Criar Movimentação

  Scenario: Conta valida
    Given Clico em salvar
    When valido mensagem erro"Data da Movimentação é obrigatório"