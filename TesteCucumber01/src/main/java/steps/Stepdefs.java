package steps;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.Helpers;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.io.File;
import java.io.IOException;
import java.util.Random;

public class Stepdefs extends Helpers {

    @Given("^o app aberto$")
    public void oAppAberto() throws Throwable {
        configuration();
    }

    @Then("^acesso a pagina$")
    public void acessoAPagina() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals("Bem vindo, schu!", element.getText());
    }

    @And("^Clico em entrar$")
    public void clicoEmEntrar() throws Throwable {
        waitElementTag("button").click();
    }

    @Then("^valido mensagem erro$")
    public void validoMensagemErro() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        WebElement element1 = waitElementXPath("/html/body/div[2]");

        Assert.assertEquals("Email é um campo obrigatório", element.getText());
        Assert.assertEquals("Senha é um campo obrigatório", element1.getText());
    }

    @And("^uma senha invalida$")
    public void umaSenhaInvalida() throws Throwable {
        waitElementID("senha").sendKeys("12");
    }

    @Then("^mensagem erro senha invalida$")
    public void mensagemErroSenhaInvalida() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals("Problemas com o login do usuário", element.getText());
    }

    @When("^informo o usuario \"([^\"]*)\"$")
    public void informoOUsuario(String arg0) throws Throwable {
        waitElementID("email").sendKeys(arg0);
    }

    @And("^informo a senha \"([^\"]*)\"$")
    public void informoASenha(String arg0) throws Throwable {
        waitElementID("senha").sendKeys(arg0);
    }

    @Then("^valido mensagem \"([^\"]*)\"$")
    public void validoMensagem(String arg0) throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals(arg0, element.getText());
    }

    @When("^informo um nome \"([^\"]*)\"$")
    public void informoUmNome(String arg0) throws Throwable {
        waitElementID("nome").sendKeys(arg0);
    }

    @When("^clico em cadastrar$")
    public void clicoEmCadastrar() throws Throwable {
        waitElementXPath("/html/body/div[2]/form/input").click();
    }

    @When("^clico em Novo usuario$")
    public void clicoEmNovoUsuario() throws Throwable {
        waitElementXPath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul/li[2]/a").click();
    }

    @After(order = 0)
    public void finishBrowser() {
        finish();
    }

    @After(order = 1)
    public void screenshots(Scenario scenario) {
        File file = ((TakesScreenshot) getWebDriver()).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(file, new File("target/screenshots/" + scenario.getId() + ".jpg"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @When("^informo os dados$")
    public void informoOsDados() throws Throwable {

        Random r = new Random();
        int random1 = r.nextInt(100);
        int random2 = r.nextInt(100);

        waitElementID("nome").sendKeys("Schu");
        waitElementID("email").sendKeys("teste" + random1, "@" + random2, ".com");
        waitElementID("senha").sendKeys("123");
        waitAppear(20);
    }

    @And("^valido mensagem$")
    public void validoMensagem() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals("Usuário inserido com sucesso", element.getText());
    }

    @When("^entro com login valido$")
    public void entroComLoginValido() throws Throwable {
        waitElementID("email").sendKeys("ieza@teste.qa");
        waitElementID("senha").sendKeys("123");
        waitElementTag("button").click();
    }

    @And("^seleciono o campo contas$")
    public void selecionoOCampoContas() throws Throwable {
        waitElementLink("Contas").click();
    }

    @Then("^clico em adicionar$")
    public void clicoEmAdicionar() throws Throwable {
        waitElementLink("Adicionar").click();

    }

    @And("^informo o nome da conta \"([^\"]*)\"$")
    public void informoONomeDaConta(String nomeconta) throws Throwable {
        waitElementID("nome").sendKeys(nomeconta);
    }

    @And("^clico em salvar$")
    public void clicoEmSalvar() throws Throwable {
        waitElementXPath("/html/body/div[2]/form/div[2]/button").click();
    }

    @Then("^valido mensagem contas \"([^\"]*)\"$")
    public void validoMensagemContas(String mensagem) throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals(mensagem,
                element.getText());
    }

    @When("^Informo o nome da conta valida$")
    public void informoONomeDaContaValida() throws Throwable {

        Random r = new Random();
        int random1 = r.nextInt(100);
        waitElementID("nome").sendKeys("teste" + random1);
    }

    @Then("^valido mensagem de sucesso$")
    public void validoMensagemDeSucesso() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals("Conta adicionada com sucesso!", element.getText());
    }

    @Then("^clico em listar$")
    public void clicoEmListar() throws Throwable {
        waitElementLink("Listar").click();
    }

    @When("^escolho opção de editar conta$")
    public void escolhoOpçãoDeEditarConta() throws Throwable {
        waitElementSelector("#tabelaContas > tbody > tr:nth-child(1) " +
                "> td:nth-child(2) > a:nth-child(1)").click();

    }

    @When("^escolho opção de excluir conta$")
    public void escolhoOpçãoDeExcluirConta() throws Throwable {
        waitElementSelector("#tabelaContas > tbody > tr:nth-child(1) > td:nth-child(2) > a:nth-child(2) > span").click();
    }

    @Then("^valido mensagem edição$")
    public void validoMensagemEdição() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals("Conta alterada com sucesso!", element.getText());
    }

    @When("^entro com login valido novamente$")
    public void entroComLoginValidoNovamente() throws Throwable {
        waitElementID("email").sendKeys("ieza@teste.qa");
        waitElementID("senha").sendKeys("123");
        waitElementTag("button").click();
    }

    @Then("^valido mensagem exclusão$")
    public void validoMensagemExclusão() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals("Conta removida com sucesso!", element.getText());
    }

    @And("^seleciono criar movimentação$")
    public void selecionoCriarMovimentação() throws Throwable {
        waitElementLink("Criar Movimentação").click();
    }

    @And("^seleciono o tipo da movimentação$")
    public void selecionoOTipoDaMovimentação() throws Throwable {
        selectCombo("tipo", "Despesa");
    }

    @And("^digito a data da movimentação\"([^\"]*)\"$")
    public void digitoADataDaMovimentação(String dataMov) throws Throwable {
        waitElementID("data_transacao").sendKeys(dataMov);
    }

    @And("^digito a data de pagamento \"([^\"]*)\"$")
    public void digitoADataDePagamento(String dataPag) throws Throwable {
        waitElementID("data_pagamento").sendKeys(dataPag);
    }

    @And("^informo a descrição \"([^\"]*)\"$")
    public void informoADescrição(String descricao) throws Throwable {
        waitElementID("descricao").sendKeys(descricao);
    }

    @And("^informo o interessado \"([^\"]*)\"$")
    public void informoOInteressado(String interessado) throws Throwable {
        waitElementID("interessado").sendKeys(interessado);
    }

    @And("^insiro o valor \"([^\"]*)\"$")
    public void insiroOValor(String valor) throws Throwable {
        waitElementID("valor").sendKeys(valor);
    }

    @And("^seleciono a conta a ser paga$")
    public void selecionoAContaASerPaga() throws Throwable {
        selectCombo("conta", "Conta com movimentacao");
    }

    @And("^escolho a situação da movimentação$")
    public void escolhoASituaçãoDaMovimentação() throws Throwable {
        waitElementID("status_pendente").click();
    }

    @Then("^clico para salvar$")
    public void clicoParaSalvar() throws Throwable {
        waitElementSelector("body > div.col-lg-10 > form" +
                "> div.btn-group > button").click();
    }

    @Then("^valido mensagens \"([^\"]*)\"$")
    public void validoMensagens(String mensagens) throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals(mensagens, element.getText());
    }

    @When("^informo dados da movimentação$")
    public void informoDadosDaMovimentação() throws Throwable {
        waitElementID("data_transacao").sendKeys("20/10/2018");
        waitElementID("data_pagamento").sendKeys("22/10/2018");
        waitElementID("descricao").sendKeys("pagamento aluguel");
        waitElementID("interessado").sendKeys("seu barriga");
        waitElementID("valor").sendKeys("250");
        waitElementID("status_pago").click();
    }

    @And("^seleciono o tipo da movimentação \"([^\"]*)\"$")
    public void selecionoOTipoDaMovimentação(String tipoMov) throws Throwable {
        WebElement element = waitElementID("tipo");
        Select combo = new Select(element);
        combo.selectByVisibleText(tipoMov);
    }

    @And("^seleciono a conta \"([^\"]*)\"$")
    public void selecionoAConta(String tipoConta) throws Throwable {
        WebElement element = waitElementID("conta");
        Select combo = new Select(element);
        combo.selectByVisibleText(tipoConta); //combo.selectByIndex(2);
    }

    @Then("^faço checagem da mensagem$")
    public void façoChecagemDaMensagem() throws Throwable {
        WebElement element = waitElementXPath("/html/body/div[1]");
        Assert.assertEquals("Movimentação adicionada com sucesso!", element.getText());
    }
}
