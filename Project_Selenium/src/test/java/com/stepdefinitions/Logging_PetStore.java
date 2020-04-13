package com.stepdefinitions;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.core.Logger;
import com.base.Web_Browser;
import com.pages.Login_PetStore;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
import cucumber.api.java.en.When;

public class Logging_PetStore extends Web_Browser{
	
	private static Logger logger = (Logger)LogManager.getLogger(Logging_PetStore.class);
	Login_PetStore log;
	
	@Given("^the user launches the browser$")
	public void the_user_launches_the_browser() throws IOException {
	    launchBrowser();
		log= new Login_PetStore(driver);
		log.URL();
	    logger.info("Launches the browser");
	}

	@When("^the user open PetStore HomePage using the link$")
	public void the_user_open_PetStore_HomePage_using_the_link() {
		log= new Login_PetStore(driver);
		log.Login_Page();
	    logger.debug("Opens the Home Page of the Petstore website");
	}

	@When("^the user enters valid \"(.*?)\" and \"(.*?)\"$")
	public void the_user_enters_valid_and(String un, String pswd) throws FileNotFoundException, IOException {
		log= new Login_PetStore(driver);
		log.LoginDetails(un, pswd);
	    logger.warn("Warns to login with different credentials");
	    
	}

	@Then("^the user clicks on login button$")
	public void the_user_clicks_on_login_button() {
		log= new Login_PetStore(driver);
		log.submit();
	    logger.debug("Signin takes place");
	}

	@Then("^the user lands on the Welcome page$")
	public void the_user_lands_on_the_Welcome_page() throws IOException, InterruptedException {
		log= new Login_PetStore(driver);
		log.quit();
	    logger.info("Open the welcome page");
	}
	
}
