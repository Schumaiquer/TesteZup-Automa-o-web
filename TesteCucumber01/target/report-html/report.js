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
  "duration": 7282649600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoUmUsuarioESenha()"
});
formatter.result({
  "duration": 216289707,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmEntrar()"
});
formatter.result({
  "duration": 760677973,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmContasAdicionar()"
});
formatter.result({
  "duration": 92955733,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmAdicionar()"
});
formatter.result({
  "duration": 356174507,
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
  "duration": 139999573,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmSalvar()"
});
formatter.result({
  "duration": 358272853,
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
  "duration": 45671253,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Conta adicionada com sucesso]!\u003e but was:\u003c[Já existe uma conta com esse nome]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.Stepdefs.validoMensagem(Stepdefs.java:73)\r\n\tat ✽.Then valido mensagem \"Conta adicionada com sucesso!\"(AddAccount.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 327068160,
  "status": "passed"
});
formatter.after({
  "duration": 1021181440,
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
  "duration": 4307782827,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.informoUmUsuarioESenha()"
});
formatter.result({
  "duration": 441205760,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmEntrar()"
});
