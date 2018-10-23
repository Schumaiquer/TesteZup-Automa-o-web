$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterNewUser.feature");
formatter.feature({
  "line": 2,
  "name": "Cadastrar novo usuario",
  "description": "Como um novo usuario\r\nGostaria de cadastrar\r\nPara assim conseguir logar",
  "id": "cadastrar-novo-usuario",
  "keyword": "Feature"
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
  "name": "clico em Novo usuario",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.oAppAberto()"
});
formatter.result({
  "duration": 6899668053,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmNovoUsuario()"
});
formatter.result({
  "duration": 336793173,
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
formatter.result({
  "duration": 20351086933,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.clicoEmCadastrar()"
});
formatter.result({
  "duration": 602624426,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.validoMensagem()"
});
formatter.result({
  "duration": 48761600,
  "status": "passed"
});
formatter.after({
  "duration": 266946560,
  "status": "passed"
});
formatter.after({
  "duration": 770332160,
  "status": "passed"
});
});