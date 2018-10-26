$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddMovimentation.feature");
formatter.feature({
  "line": 2,
  "name": "Adicionar movimentação",
  "description": "Com o login efetuado\nGostaria de criar movimentação\nPara pagar o aluguel",
  "id": "adicionar-movimentação",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Deve validar as regras de movimentação",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "seleciono o tipo da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "digito a data da movimentação\"\u003cdataMov\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "digito a data de pagamento \"\u003cdataPag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "informo a descrição \"\u003cdescricao\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "informo o interessado \"\u003cinteressado\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "insiro o valor \"\u003cvalor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "seleciono a conta a ser paga",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "escolho a situação da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "valido mensagens \"\u003cmensagens\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;",
  "rows": [
    {
      "cells": [
        "dataMov",
        "dataPag",
        "descricao",
        "interessado",
        "valor",
        "mensagens"
      ],
      "line": 25,
      "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;1"
    },
    {
      "cells": [
        "20102018",
        "22102018",
        "Pagamento aluguel 01",
        "seu barriga",
        "250,50",
        "Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nValor deve ser um número"
      ],
      "line": 26,
      "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;2"
    },
    {
      "cells": [
        "20102018",
        "22102018",
        "",
        "",
        "",
        "Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número"
      ],
      "line": 27,
      "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;3"
    },
    {
      "cells": [
        "20/10/2018",
        "22/10/2018",
        "",
        "",
        "",
        "Descrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número"
      ],
      "line": 28,
      "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;4"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "Data da Movimentação é obrigatório\nData do pagamento é obrigatório\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número"
      ],
      "line": 29,
      "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;5"
    },
    {
      "cells": [
        "20/10/2018",
        "22/10/2018",
        "Pagamento aluguel 01",
        "seu barriga",
        "250",
        "Movimentação adicionada com sucesso!"
      ],
      "line": 30,
      "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;6"
    },
    {
      "cells": [
        "20/10/2018",
        "22/10/2018",
        "Pagamento aluguel 01",
        "seu barriga",
        "250.50",
        "Movimentação adicionada com sucesso!"
      ],
      "line": 31,
      "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 3077997658,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 779685280,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 298797909,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar as regras de movimentação",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "seleciono o tipo da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "digito a data da movimentação\"20102018\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "digito a data de pagamento \"22102018\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "informo a descrição \"Pagamento aluguel 01\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "informo o interessado \"seu barriga\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "insiro o valor \"250,50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "seleciono a conta a ser paga",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "escolho a situação da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "valido mensagens \"Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nValor deve ser um número\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.selecionoOTipoDaMovimentação()"
});
formatter.result({
  "duration": 104155175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20102018",
      "offset": 30
    }
  ],
  "location": "Stepdefs.digitoADataDaMovimentação(String)"
});
formatter.result({
  "duration": 128866467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22102018",
      "offset": 28
    }
  ],
  "location": "Stepdefs.digitoADataDePagamento(String)"
});
formatter.result({
  "duration": 100328051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagamento aluguel 01",
      "offset": 21
    }
  ],
  "location": "Stepdefs.informoADescrição(String)"
});
formatter.result({
  "duration": 154405458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seu barriga",
      "offset": 23
    }
  ],
  "location": "Stepdefs.informoOInteressado(String)"
});
formatter.result({
  "duration": 110500913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250,50",
      "offset": 16
    }
  ],
  "location": "Stepdefs.insiroOValor(String)"
});
formatter.result({
  "duration": 75131302,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoAContaASerPaga()"
});
formatter.result({
  "duration": 108175909,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.escolhoASituaçãoDaMovimentação()"
});
formatter.result({
  "duration": 81603896,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 279335383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nValor deve ser um número",
      "offset": 18
    }
  ],
  "location": "Stepdefs.validoMensagens(String)"
});
formatter.result({
  "duration": 39875555,
  "status": "passed"
});
formatter.after({
  "duration": 404015958,
  "status": "passed"
});
formatter.after({
  "duration": 111040662,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1772300254,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 770180822,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 279807861,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar as regras de movimentação",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "seleciono o tipo da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "digito a data da movimentação\"20102018\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "digito a data de pagamento \"22102018\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "informo a descrição \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "informo o interessado \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "insiro o valor \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "seleciono a conta a ser paga",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "escolho a situação da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "valido mensagens \"Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.selecionoOTipoDaMovimentação()"
});
formatter.result({
  "duration": 101241998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20102018",
      "offset": 30
    }
  ],
  "location": "Stepdefs.digitoADataDaMovimentação(String)"
});
formatter.result({
  "duration": 127701028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22102018",
      "offset": 28
    }
  ],
  "location": "Stepdefs.digitoADataDePagamento(String)"
});
formatter.result({
  "duration": 85541432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "Stepdefs.informoADescrição(String)"
});
formatter.result({
  "duration": 77456492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "Stepdefs.informoOInteressado(String)"
});
formatter.result({
  "duration": 81917587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "Stepdefs.insiroOValor(String)"
});
formatter.result({
  "duration": 67248105,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoAContaASerPaga()"
});
formatter.result({
  "duration": 143711847,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.escolhoASituaçãoDaMovimentação()"
});
formatter.result({
  "duration": 74248616,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 281870638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da Movimentação inválida (DD/MM/YYYY)\nData do pagamento inválida (DD/MM/YYYY)\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número",
      "offset": 18
    }
  ],
  "location": "Stepdefs.validoMensagens(String)"
});
formatter.result({
  "duration": 38493153,
  "status": "passed"
});
formatter.after({
  "duration": 372737605,
  "status": "passed"
});
formatter.after({
  "duration": 88424032,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1856076426,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 783553160,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 371741099,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Deve validar as regras de movimentação",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "seleciono o tipo da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "digito a data da movimentação\"20/10/2018\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "digito a data de pagamento \"22/10/2018\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "informo a descrição \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "informo o interessado \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "insiro o valor \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "seleciono a conta a ser paga",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "escolho a situação da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "valido mensagens \"Descrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.selecionoOTipoDaMovimentação()"
});
formatter.result({
  "duration": 94354190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/10/2018",
      "offset": 30
    }
  ],
  "location": "Stepdefs.digitoADataDaMovimentação(String)"
});
formatter.result({
  "duration": 129918812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/10/2018",
      "offset": 28
    }
  ],
  "location": "Stepdefs.digitoADataDePagamento(String)"
});
formatter.result({
  "duration": 96451616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "Stepdefs.informoADescrição(String)"
});
formatter.result({
  "duration": 59208511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "Stepdefs.informoOInteressado(String)"
});
formatter.result({
  "duration": 68881262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "Stepdefs.insiroOValor(String)"
});
formatter.result({
  "duration": 54656500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoAContaASerPaga()"
});
formatter.result({
  "duration": 104247207,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.escolhoASituaçãoDaMovimentação()"
});
formatter.result({
  "duration": 77433001,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 297193666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número",
      "offset": 18
    }
  ],
  "location": "Stepdefs.validoMensagens(String)"
});
formatter.result({
  "duration": 42839715,
  "status": "passed"
});
formatter.after({
  "duration": 354031550,
  "status": "passed"
});
formatter.after({
  "duration": 84563727,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1985752152,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 837252652,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 276778116,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Deve validar as regras de movimentação",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "seleciono o tipo da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "digito a data da movimentação\"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "digito a data de pagamento \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "informo a descrição \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "informo o interessado \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "insiro o valor \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "seleciono a conta a ser paga",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "escolho a situação da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "valido mensagens \"Data da Movimentação é obrigatório\nData do pagamento é obrigatório\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.selecionoOTipoDaMovimentação()"
});
formatter.result({
  "duration": 91258763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "Stepdefs.digitoADataDaMovimentação(String)"
});
formatter.result({
  "duration": 70047085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "Stepdefs.digitoADataDePagamento(String)"
});
formatter.result({
  "duration": 74420134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "Stepdefs.informoADescrição(String)"
});
formatter.result({
  "duration": 56021950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "Stepdefs.informoOInteressado(String)"
});
formatter.result({
  "duration": 57605814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "Stepdefs.insiroOValor(String)"
});
formatter.result({
  "duration": 71464193,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoAContaASerPaga()"
});
formatter.result({
  "duration": 117843022,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.escolhoASituaçãoDaMovimentação()"
});
formatter.result({
  "duration": 84653860,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 314028509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da Movimentação é obrigatório\nData do pagamento é obrigatório\nDescrição é obrigatório\nInteressado é obrigatório\nValor é obrigatório\nValor deve ser um número",
      "offset": 18
    }
  ],
  "location": "Stepdefs.validoMensagens(String)"
});
formatter.result({
  "duration": 44261992,
  "status": "passed"
});
formatter.after({
  "duration": 352804045,
  "status": "passed"
});
formatter.after({
  "duration": 103370401,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1739756376,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 774472746,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 278434505,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Deve validar as regras de movimentação",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "seleciono o tipo da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "digito a data da movimentação\"20/10/2018\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "digito a data de pagamento \"22/10/2018\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "informo a descrição \"Pagamento aluguel 01\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "informo o interessado \"seu barriga\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "insiro o valor \"250\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "seleciono a conta a ser paga",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "escolho a situação da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "valido mensagens \"Movimentação adicionada com sucesso!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.selecionoOTipoDaMovimentação()"
});
formatter.result({
  "duration": 95970719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/10/2018",
      "offset": 30
    }
  ],
  "location": "Stepdefs.digitoADataDaMovimentação(String)"
});
formatter.result({
  "duration": 142362164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/10/2018",
      "offset": 28
    }
  ],
  "location": "Stepdefs.digitoADataDePagamento(String)"
});
formatter.result({
  "duration": 92316451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagamento aluguel 01",
      "offset": 21
    }
  ],
  "location": "Stepdefs.informoADescrição(String)"
});
formatter.result({
  "duration": 148859754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seu barriga",
      "offset": 23
    }
  ],
  "location": "Stepdefs.informoOInteressado(String)"
});
formatter.result({
  "duration": 92145578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 16
    }
  ],
  "location": "Stepdefs.insiroOValor(String)"
});
formatter.result({
  "duration": 89395267,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoAContaASerPaga()"
});
formatter.result({
  "duration": 94203722,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.escolhoASituaçãoDaMovimentação()"
});
formatter.result({
  "duration": 92460685,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 354119286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Movimentação adicionada com sucesso!",
      "offset": 18
    }
  ],
  "location": "Stepdefs.validoMensagens(String)"
});
formatter.result({
  "duration": 39552338,
  "status": "passed"
});
formatter.after({
  "duration": 350885686,
  "status": "passed"
});
formatter.after({
  "duration": 98244793,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1868163938,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 799898272,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 284720644,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Deve validar as regras de movimentação",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-as-regras-de-movimentação;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "seleciono o tipo da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "digito a data da movimentação\"20/10/2018\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "digito a data de pagamento \"22/10/2018\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "informo a descrição \"Pagamento aluguel 01\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "informo o interessado \"seu barriga\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "insiro o valor \"250.50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "seleciono a conta a ser paga",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "escolho a situação da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "valido mensagens \"Movimentação adicionada com sucesso!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.selecionoOTipoDaMovimentação()"
});
formatter.result({
  "duration": 92316432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/10/2018",
      "offset": 30
    }
  ],
  "location": "Stepdefs.digitoADataDaMovimentação(String)"
});
formatter.result({
  "duration": 123767059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/10/2018",
      "offset": 28
    }
  ],
  "location": "Stepdefs.digitoADataDePagamento(String)"
});
formatter.result({
  "duration": 91196009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagamento aluguel 01",
      "offset": 21
    }
  ],
  "location": "Stepdefs.informoADescrição(String)"
});
formatter.result({
  "duration": 143952805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seu barriga",
      "offset": 23
    }
  ],
  "location": "Stepdefs.informoOInteressado(String)"
});
formatter.result({
  "duration": 98483633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250.50",
      "offset": 16
    }
  ],
  "location": "Stepdefs.insiroOValor(String)"
});
formatter.result({
  "duration": 84662592,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoAContaASerPaga()"
});
formatter.result({
  "duration": 105412226,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.escolhoASituaçãoDaMovimentação()"
});
formatter.result({
  "duration": 72423742,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 286781005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Movimentação adicionada com sucesso!",
      "offset": 18
    }
  ],
  "location": "Stepdefs.validoMensagens(String)"
});
formatter.result({
  "duration": 36245027,
  "status": "passed"
});
formatter.after({
  "duration": 357064474,
  "status": "passed"
});
formatter.after({
  "duration": 88006691,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"\u003ctipoMov\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"\u003ctipoConta\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;",
  "rows": [
    {
      "cells": [
        "tipoConta",
        "tipoMov"
      ],
      "line": 43,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;1"
    },
    {
      "cells": [
        "Conta para alterar",
        "Receita"
      ],
      "line": 44,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;2"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Receita"
      ],
      "line": 45,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;3"
    },
    {
      "cells": [
        "Conta para movimentacoes",
        "Receita"
      ],
      "line": 46,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;4"
    },
    {
      "cells": [
        "Conta com movimentacao",
        "Receita"
      ],
      "line": 47,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;5"
    },
    {
      "cells": [
        "Conta para saldo",
        "Receita"
      ],
      "line": 48,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;6"
    },
    {
      "cells": [
        "Conta para extrato",
        "Receita"
      ],
      "line": 49,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;7"
    },
    {
      "cells": [
        "Conta para alterar",
        "Despesa"
      ],
      "line": 50,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;8"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Despesa"
      ],
      "line": 51,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;9"
    },
    {
      "cells": [
        "Conta para movimentacoes",
        "Despesa"
      ],
      "line": 52,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;10"
    },
    {
      "cells": [
        "Conta com movimentacao",
        "Despesa"
      ],
      "line": 53,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;11"
    },
    {
      "cells": [
        "Conta para saldo",
        "Despesa"
      ],
      "line": 54,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;12"
    },
    {
      "cells": [
        "Conta para extrato",
        "Despesa"
      ],
      "line": 55,
      "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1852734799,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 802095566,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 267479231,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Receita\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para alterar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Receita",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 76066353,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 556108472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para alterar",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 58581914,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 276129129,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 40706586,
  "status": "passed"
});
formatter.after({
  "duration": 365589752,
  "status": "passed"
});
formatter.after({
  "duration": 110981230,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1748759797,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 767166026,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 277269487,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Receita\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Receita",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 66377275,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 548033768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 104229124,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 281609330,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 42905110,
  "status": "passed"
});
formatter.after({
  "duration": 359658418,
  "status": "passed"
});
formatter.after({
  "duration": 102155759,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1845902165,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 762766162,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 274277318,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Receita\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para movimentacoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Receita",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 93143314,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 578942976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para movimentacoes",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 85340206,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 283693604,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 44899367,
  "status": "passed"
});
formatter.after({
  "duration": 360045467,
  "status": "passed"
});
formatter.after({
  "duration": 130551383,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1827004528,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 774104337,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 276958654,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Receita\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta com movimentacao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Receita",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 73512800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 536778604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta com movimentacao",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 91503579,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 289592622,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 48356223,
  "status": "passed"
});
formatter.after({
  "duration": 359811913,
  "status": "passed"
});
formatter.after({
  "duration": 105751119,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1797772157,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 888626859,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 290225296,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Receita\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para saldo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Receita",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 63661686,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 541827050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para saldo",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 87257480,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 450494598,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 38002078,
  "status": "passed"
});
formatter.after({
  "duration": 366223441,
  "status": "passed"
});
formatter.after({
  "duration": 104763283,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1826088996,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 791736996,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 276109836,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Receita\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para extrato\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Receita",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 73501781,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 546830901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para extrato",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 92892952,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 319699760,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 38081217,
  "status": "passed"
});
formatter.after({
  "duration": 356759007,
  "status": "passed"
});
formatter.after({
  "duration": 84842635,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1795357592,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 776247737,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 273963133,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Despesa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para alterar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Despesa",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 88207821,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 565811181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para alterar",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 60578675,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 303747530,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 36814628,
  "status": "passed"
});
formatter.after({
  "duration": 363102498,
  "status": "passed"
});
formatter.after({
  "duration": 85252704,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 2202079800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 830484536,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 282174771,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Despesa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Despesa",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 90726013,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 587846785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 83601352,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 287325336,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 40493523,
  "status": "passed"
});
formatter.after({
  "duration": 361134263,
  "status": "passed"
});
formatter.after({
  "duration": 86897917,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1742587189,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 798979927,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 309749286,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Despesa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para movimentacoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Despesa",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 90004592,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 558659718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para movimentacoes",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 86033193,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 304406730,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 37640924,
  "status": "passed"
});
formatter.after({
  "duration": 361368507,
  "status": "passed"
});
formatter.after({
  "duration": 103436887,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 2721320002,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 797449158,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 268605110,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Despesa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta com movimentacao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Despesa",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 96492322,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 567078734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta com movimentacao",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 86806311,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 279010037,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 42157551,
  "status": "passed"
});
formatter.after({
  "duration": 368421185,
  "status": "passed"
});
formatter.after({
  "duration": 104248511,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1917609712,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 797566208,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 272196636,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Despesa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para saldo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Despesa",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 92910455,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 548789588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para saldo",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 84482234,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 284875788,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 39985007,
  "status": "passed"
});
formatter.after({
  "duration": 356545758,
  "status": "passed"
});
formatter.after({
  "duration": 110637761,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "entro com login valido",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar movimentação",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1740467350,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 799234792,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoCriarMovimentação()"
});
formatter.result({
  "duration": 267858968,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Deve validar o combo de contas",
  "description": "",
  "id": "adicionar-movimentação;deve-validar-o-combo-de-contas;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "seleciono o tipo da movimentação \"Despesa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "informo dados da movimentação",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "seleciono a conta \"Conta para extrato\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "clico para salvar",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "faço checagem da mensagem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Despesa",
      "offset": 34
    }
  ],
  "location": "Stepdefs.selecionoOTipoDaMovimentação(String)"
});
formatter.result({
  "duration": 91529914,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoDadosDaMovimentação()"
});
formatter.result({
  "duration": 585406640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta para extrato",
      "offset": 19
    }
  ],
  "location": "Stepdefs.selecionoAConta(String)"
});
formatter.result({
  "duration": 86368105,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoParaSalvar()"
});
formatter.result({
  "duration": 296350612,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.façoChecagemDaMensagem()"
});
formatter.result({
  "duration": 38038698,
  "status": "passed"
});
formatter.after({
  "duration": 374635336,
  "status": "passed"
});
formatter.after({
  "duration": 135598783,
  "status": "passed"
});
});