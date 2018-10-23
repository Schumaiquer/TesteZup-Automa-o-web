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
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;

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
        Assert.assertEquals("Bem vindo, schu!",waitElementXPath("/html/body/div[1]").getText());
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

    @When("^informo um usuario e senha$")
    public void informoUmUsuarioESenha() throws Throwable {
        waitElementID("email").sendKeys("schu@schu1");
        waitElementID("senha").sendKeys("123");
    }

    @And("^Clico em Contas$")
    public void clicoEmContasAdicionar() throws Throwable {
        waitElementLink("Contas").click();
    }

    @And("^Clico em Adicionar$")
    public void clicoEmAdicionar() throws Throwable {
        waitElementLink("Adicionar").click();
    }

    @Given("^um nome de conta$")
    public void umNomeDeConta() throws Throwable {
        Random r = new Random();
        int random = r.nextInt(100);
      Assert.assertEquals("Nome",waitElementXPath("/html/body/div[2]/form/div[1]/div/label").getText());
       waitElementID("nome").sendKeys("conta"+random,"s");
    }

    @When("^Clico em salvar$")
    public void clicoEmSalvar() throws Throwable {
        waitElementXPath("/html/body/div[2]/form/div[2]/button").click();
    }

    @When("^informo uma conta \"([^\"]*)\"$")
    public void informoUmaConta(String arg0) throws Throwable {
        waitElementID("nome").sendKeys(arg0);
    }
}
