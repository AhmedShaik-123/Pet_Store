package com.stepdefinitions;

import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.core.Logger;
import com.base.Web_Browser;
import com.pages.InvalidCredentials_PetStore;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
import cucumber.api.java.en.When;

public class Invalid_PetStore extends Web_Browser{
	
	private static Logger logger = (Logger)LogManager.getLogger(Invalid_PetStore.class);
	InvalidCredentials_PetStore invalid;
	
	@Given("the user will launch the browser")
	public void the_user_will_launch_the_browser() throws IOException {
		launchBrowser();
		invalid = new InvalidCredentials_PetStore(driver);
	    invalid.URL();
	    logger.debug("Launches the browser");
	}

	@When("the user open the Pet Store Home page through the link")
	public void the_user_open_the_Pet_Store_Home_page_through_the_link() {
		invalid = new InvalidCredentials_PetStore(driver);
	    invalid.Login_Page();
	    logger.debug("opens the petstore website");
	}

	@When("the user enters invalid credentials")
	public void the_user_enters_invalid_credentials() {
		invalid = new InvalidCredentials_PetStore(driver);
		invalid.LoginDetails();
		logger.info("Given invalid credentials");
	}

	@Then("the user will click on login button")
	public void the_user_will_click_on_login_button() {
		invalid = new InvalidCredentials_PetStore(driver);
		invalid.submit();
		logger.info("Submitting with invalid credentials");
	}

	@Then("it gives error message that the credentials are invalid")
	public void it_gives_error_message_that_the_credentials_are_invalid() throws IOException {
		invalid = new InvalidCredentials_PetStore(driver);
		invalid.ErrorMessage();
		logger.warn("Gives a warning that u have entered invalid un/pswd");
	}
	
}
