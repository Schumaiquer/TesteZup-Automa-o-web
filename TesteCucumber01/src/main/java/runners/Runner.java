package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:/Users/zupper/IdeaProjects/TesteCucumber01/src/main/resources/features/",  //caminho das features
        glue = "steps",  // pacote onde fica os steps
        plugin = {"html:target/report-html/"}, // gera relatorio
        monochrome = true, // habilita cores de execução
        tags = {"@t2"},
        snippets = SnippetType.CAMELCASE,
        dryRun = false, // se for "true" da após executar os metodos faltando
        strict = false
)

public class Runner {
}
