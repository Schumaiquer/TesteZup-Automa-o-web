$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Adicionar conta",
  "description": "Como um usuario\r\nGostaria de adicionar conta\r\nPara ter um controle de gastos",
  "id": "adicionar-conta",
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
  "name": "informo um usuario e senha",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Clico em Contas",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clico em Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 7255044266,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoUmUsuarioESenha()"
});
formatter.result({
  "duration": 202477653,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmEntrar()"
});
formatter.result({
  "duration": 762873173,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmContasAdicionar()"
});
formatter.result({
  "duration": 85415253,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 319700053,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Conta valida",
  "description": "",
  "id": "adicionar-conta;conta-valida",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "um nome de conta",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Clico em salvar",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "valido mensagem \"Conta adicionada com sucesso!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.umNomeDeConta()"
});
formatter.result({
  "duration": 123717547,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 399991467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 17
    }
  ],
  "location": "Stepdefs.validoMensagem(String)"
});
formatter.result({
  "duration": 37008640,
  "status": "passed"
});
formatter.after({
  "duration": 317044907,
  "status": "passed"
});
formatter.after({
  "duration": 755209813,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Deve validar regras de criacao de conta",
  "description": "",
  "id": "adicionar-conta;deve-validar-regras-de-criacao-de-conta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "informo uma conta \"\u003cconta\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "valido mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "adicionar-conta;deve-validar-regras-de-criacao-de-conta;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 26,
      "id": "adicionar-conta;deve-validar-regras-de-criacao-de-conta;;1"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 27,
      "id": "adicionar-conta;deve-validar-regras-de-criacao-de-conta;;2"
    },
    {
      "cells": [
        "teste2",
        "Já existe uma conta com esse nome!"
      ],
      "line": 28,
      "id": "adicionar-conta;deve-validar-regras-de-criacao-de-conta;;3"
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
  "name": "informo um usuario e senha",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Clico em Contas",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clico em Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 5718433280,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoUmUsuarioESenha()"
});
formatter.result({
  "duration": 208380160,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmEntrar()"
});
formatter.result({
  "duration": 2751939840,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmContasAdicionar()"
});
formatter.result({
  "duration": 85323946,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 344843947,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar regras de criacao de conta",
  "description": "",
  "id": "adicionar-conta;deve-validar-regras-de-criacao-de-conta;;2",
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
  "line": 21,
  "name": "informo uma conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "valido mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "Stepdefs.informoUmaConta(String)"
});
formatter.result({
  "duration": 72860587,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 308298240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 17
    }
  ],
  "location": "Stepdefs.validoMensagem(String)"
});
formatter.result({
  "duration": 41701973,
  "status": "passed"
});
formatter.after({
  "duration": 262526720,
  "status": "passed"
});
formatter.after({
  "duration": 741071787,
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
  "name": "informo um usuario e senha",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Clico em entrar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Clico em Contas",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clico em Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 5334839893,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoUmUsuarioESenha()"
});
formatter.result({
  "duration": 204003840,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmEntrar()"
});
formatter.result({
  "duration": 820852907,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmContasAdicionar()"
});
formatter.result({
  "duration": 118774613,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 326661120,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Deve validar regras de criacao de conta",
  "description": "",
  "id": "adicionar-conta;deve-validar-regras-de-criacao-de-conta;;3",
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
  "line": 21,
  "name": "informo uma conta \"teste2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Clico em salvar",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "valido mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "teste2",
      "offset": 19
    }
  ],
  "location": "Stepdefs.informoUmaConta(String)"
});
formatter.result({
  "duration": 109557334,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 302967893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 17
    }
  ],
  "location": "Stepdefs.validoMensagem(String)"
});
formatter.result({
  "duration": 34772053,
  "status": "passed"
});
formatter.after({
  "duration": 309409706,
  "status": "passed"
});
formatter.after({
  "duration": 772041386,
  "status": "passed"
});
});