$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Adicionar nova conta",
  "description": "Com o login efetuado\nGostaria de adicionar uma nova conta\nPara pagar o aluguel",
  "id": "adicionar-nova-conta",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@t3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Deve validar as regras de Contas",
  "description": "",
  "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "informo o nome da conta \"\u003cnomeconta\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "valido mensagem contas \"\u003cmensagem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;",
  "rows": [
    {
      "cells": [
        "nomeconta",
        "mensagem"
      ],
      "line": 20,
      "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;;1"
    },
    {
      "cells": [
        "primeira conta",
        "Conta adicionada com sucesso!"
      ],
      "line": 21,
      "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;;2"
    },
    {
      "cells": [
        "conta repetida",
        "Já existe uma conta com esse nome!"
      ],
      "line": 22,
      "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;;3"
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
  "name": "seleciono o campo contas",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em adicionar",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 3315839678,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 826242799,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoOCampoContas()"
});
formatter.result({
  "duration": 74526836,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 267969983,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Deve validar as regras de Contas",
  "description": "",
  "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t3"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informo o nome da conta \"primeira conta\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "valido mensagem contas \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "primeira conta",
      "offset": 25
    }
  ],
  "location": "Stepdefs.informoONomeDaConta(String)"
});
formatter.result({
  "duration": 100808537,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 276757656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 24
    }
  ],
  "location": "Stepdefs.validoMensagemContas(String)"
});
formatter.result({
  "duration": 50407596,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Conta adicionada com sucesso]!\u003e but was:\u003c[Já existe uma conta com esse nome]!\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat steps.Stepdefs.validoMensagemContas(Stepdefs.java:155)\n\tat ✽.Then valido mensagem contas \"Conta adicionada com sucesso!\"(AddAccount.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "duration": 395457961,
  "status": "passed"
});
formatter.after({
  "duration": 149133430,
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
  "name": "seleciono o campo contas",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em adicionar",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 2211900789,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 788200967,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoOCampoContas()"
});
formatter.result({
  "duration": 97478399,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 320440848,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Deve validar as regras de Contas",
  "description": "",
  "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t3"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informo o nome da conta \"conta repetida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "valido mensagem contas \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "conta repetida",
      "offset": 25
    }
  ],
  "location": "Stepdefs.informoONomeDaConta(String)"
});
formatter.result({
  "duration": 99270853,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 290812315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 24
    }
  ],
  "location": "Stepdefs.validoMensagemContas(String)"
});
formatter.result({
  "duration": 52669589,
  "status": "passed"
});
formatter.after({
  "duration": 401813218,
  "status": "passed"
});
formatter.after({
  "duration": 102067349,
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
  "name": "seleciono o campo contas",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico em adicionar",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 1831173629,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
