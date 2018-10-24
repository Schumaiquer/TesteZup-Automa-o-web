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
  "duration": 4772739694,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 879797128,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoOCampoContas()"
});
formatter.result({
  "duration": 84701733,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 278959118,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve validar cenário de sucesso",
  "description": "",
  "id": "adicionar-nova-conta;deve-validar-cenário-de-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Informo o nome da conta valida",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "valido mensagem de sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.informoONomeDaContaValida()"
});
formatter.result({
  "duration": 93843790,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 365066993,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.validoMensagemDeSucesso()"
});
formatter.result({
  "duration": 49652172,
  "status": "passed"
});
formatter.after({
  "duration": 452522243,
  "status": "passed"
});
formatter.after({
  "duration": 111008452,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Deve validar as regras de Contas",
  "description": "",
  "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "informo o nome da conta \"\u003cnomeconta\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "valido mensagem contas \"\u003cmensagem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;",
  "rows": [
    {
      "cells": [
        "nomeconta",
        "mensagem"
      ],
      "line": 25,
      "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;;1"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 26,
      "id": "adicionar-nova-conta;deve-validar-as-regras-de-contas;;2"
    },
    {
      "cells": [
        "conta repetida",
        "Já existe uma conta com esse nome!"
      ],
      "line": 27,
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
  "duration": 2047254515,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 1013997346,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoOCampoContas()"
});
formatter.result({
  "duration": 71858269,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 265156239,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
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
  "line": 19,
  "name": "informo o nome da conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "valido mensagem contas \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "Stepdefs.informoONomeDaConta(String)"
});
formatter.result({
  "duration": 61463011,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 269558982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 24
    }
  ],
  "location": "Stepdefs.validoMensagemContas(String)"
});
formatter.result({
  "duration": 38921433,
  "status": "passed"
});
formatter.after({
  "duration": 437034090,
  "status": "passed"
});
formatter.after({
  "duration": 92570840,
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
  "duration": 1895956303,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.entroComLoginValido()"
});
formatter.result({
  "duration": 862933828,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.selecionoOCampoContas()"
});
formatter.result({
  "duration": 95884706,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 318530428,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
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
  "line": 19,
  "name": "informo o nome da conta \"conta repetida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 21,
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
  "duration": 115958538,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 268972665,
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
  "duration": 36602051,
  "status": "passed"
});
formatter.after({
  "duration": 335548585,
  "status": "passed"
});
formatter.after({
  "duration": 87561208,
  "status": "passed"
});
});