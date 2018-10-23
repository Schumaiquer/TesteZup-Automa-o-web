package helpers;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class Helpers {
    private WebDriver driver;

    public WebDriver getWebDriver() {
        if (driver == null) {
            configuration();
        }
        return driver;
    }

    protected void configuration() {
        System.setProperty("webdriver.chrome.driver", "C:/Users/zupper/Documents/Zup/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://seubarriga.wcaquino.me/");
    }

    public WebElement waitElementID(String element_ID) {
        return driver.findElement(By.id(element_ID));
    }

    public WebElement waitElementTag(String element_TAG) {
        return driver.findElement(By.tagName(element_TAG));
    }

    public WebElement waitElementXPath(String element_XPath) {
        return driver.findElement(By.xpath(element_XPath));
    }

    public void waitAppear(int seconds) {
        try {
            Thread.sleep(seconds * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void finish() {
        driver.quit();
    }

}
