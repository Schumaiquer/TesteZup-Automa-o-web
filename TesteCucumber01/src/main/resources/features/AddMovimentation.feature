@t5
Feature: Adicionar movimentação
  Com o login efetuado
  Gostaria de criar movimentação
  Para pagar o aluguel

  Background:
    Given o app aberto
    When entro com login valido
    And  seleciono criar movimentação

  Scenario Outline: Deve validar as regras de movimentação
    And seleciono o tipo da movimentação
    And digito a data da movimentação"<dataMov>"
    And digito a data de pagamento "<dataPag>"
    And informo a descrição "<descricao>"
    And informo o interessado "<interessado>"
    And insiro o valor "<valor>"
    And seleciono a conta a ser paga
    And escolho a situação da movimentação
    And clico para salvar
    Then valido mensagens "<mensagens>"

    Examples:
      | dataMov    | dataPag    | descricao            | interessado | valor  | mensagens                                                                                                                                                                              |
      | 20102018   | 22102018   | Pagamento aluguel 01 | seu barriga | 250,50 | Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nValor deve ser um número                                                                          |
      | 20102018   | 22102018   |                      |             |        | Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número |
      | 20/10/2018 | 22/10/2018 |                      |             |        | Descrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número                                                                                      |
      |            |            |                      |             |        | Data da Movimentação é obrigatório\nData do pagamento é obrigatório\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número                 |
      | 20/10/2018 | 22/10/2018 | Pagamento aluguel 01 | seu barriga | 250    | Movimentação adicionada com sucesso!                                                                                                                                                   |
      | 20/10/2018 | 22/10/2018 | Pagamento aluguel 01 | seu barriga | 250.50 | Movimentação adicionada com sucesso!                                                                                                                                                   |


  Scenario Outline: Deve validar o combo de contas
    When seleciono o tipo da movimentação "<tipoMov>"
    And  informo dados da movimentação
    And  seleciono a conta "<tipoConta>"
    And  clico para salvar
    Then faço checagem da mensagem

    Examples:

      | tipoConta                | tipoMov |
      | Conta para alterar       | Receita |
      | Conta mesmo nome         | Receita |
      | Conta para movimentacoes | Receita |
      | Conta com movimentacao   | Receita |
      | Conta para saldo         | Receita |
      | Conta para extrato       | Receita |
      | Conta para alterar       | Despesa |
      | Conta mesmo nome         | Despesa |
      | Conta para movimentacoes | Despesa |
      | Conta com movimentacao   | Despesa |
      | Conta para saldo         | Despesa |
      | Conta para extrato       | Despesa |
