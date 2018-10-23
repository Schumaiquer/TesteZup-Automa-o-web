$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterNewUser.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastrar novo usuario",
  "description": "Como um novo usuario\r\nGostaria de cadastrar\r\nPara assim conseguir logar",
  "id": "cadastrar-novo-usuario",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "o app aberto",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "clico em Novo usuario",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 6106225067,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmNovoUsuario()"
});
formatter.result({
  "duration": 317663147,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Novo Usuario",
  "description": "",
  "id": "cadastrar-novo-usuario;novo-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@t2"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "informo os dados",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "clico em cadastrar",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "valido mensagem",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.informoOsDados()"
});
