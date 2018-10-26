package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/Ieza/Desktop/test/TesteZup-Automa-o-web/TesteCucumber01/src/main/resources/features",  //caminho das features
        glue = "steps",  // pacote onde fica os steps
        plugin = {"html:target/report-html/"}, // gera relatorio
        monochrome = true, // habilita cores de execução
        tags = {"@t5"},
        snippets = SnippetType.CAMELCASE,
        dryRun = false, // se for "true" da após executar os metodos faltando
        strict = false
)

public class RunnerTest { }
