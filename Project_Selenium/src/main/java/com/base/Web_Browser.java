package com.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Web_Browser {
	
	public WebDriver driver;
    Properties prop;

    public void launchBrowser() throws IOException {

    	//Locating the Path of the file of the Property File
    	FileInputStream objfile = new 	FileInputStream(new File("src/test/resources/Configuration_Property/config.property"));
    	//Creating the object for the property file
    	prop = new Properties();
    	//Loading the property file into the object
    	prop.load(objfile);
    	//Initializing the browser name
    	String browserName = prop.getProperty("browser");
    	//Checking the browser name for chrome
	
    	if(browserName.equalsIgnoreCase("chrome")){
    		System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");
    		driver =new ChromeDriver();
    	}
    	//Checking the browser name for firefox
    	else if(browserName.equalsIgnoreCase("firefox")) {
    		//Initializing the Driver
    		System.setProperty("webdriver.gecko.driver", "src/test/resources/Driver/geckodriver.exe");
    		driver = new FirefoxDriver();
    	}
	
    	//Maximizing the window
    	driver.manage().window().maximize();
    	//Implicitily waiting for driver
    	driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS); 
    	//Getting the url from the property file
    	String url=prop.getProperty("url");
    	//getting url from the property file
    	driver.get(url);
	}   	
}
