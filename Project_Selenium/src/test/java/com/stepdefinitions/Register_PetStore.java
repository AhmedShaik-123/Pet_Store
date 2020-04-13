package com.stepdefinitions;

import java.io.IOException;
/*import java.util.logging.LogManager;
import java.util.logging.Logger;*/

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.base.Web_Browser;
import com.pages.Registration_PetStore;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;


public class Register_PetStore extends Web_Browser{
	
	private static Logger logger = (Logger)LogManager.getLogger(Register_PetStore.class);		
	Registration_PetStore reg;
	
	@Given("the user launch the browser")
	public void the_user_launch_the_browser() throws IOException {
		launchBrowser();
		reg = new Registration_PetStore(driver);
	    reg.URL();
	    logger.debug("Navigates to a specific Link");
	}

	@When("the user open the Pet Store Home page using the link")
	public void the_user_open_the_Pet_Store_Home_page_using_the_link() {
	   reg = new Registration_PetStore(driver);
	   reg.Registration_Page();
	   logger.debug("Home page of is opened");
	}

	@When("the user enters the details to register")
	public void the_user_enters_the_details_to_register() {
		reg = new Registration_PetStore(driver);
	    reg.Registration_Details();
	    logger.warn("Registration page is opened and warn to give same password in retype password");
	}

	@Then("the user clicks on register button")
	public void the_user_clicks_on_register_button() {
		reg = new Registration_PetStore(driver);
	    reg.submit();
	    logger.info("Click on Save the information");
	}

	@Then("the user lands on the Home page to signin")
	public void the_user_lands_on_the_Home_page_to_signin() throws IOException {
	   reg = new Registration_PetStore(driver);
	   reg.quit();
	   logger.info("Regisration Completed");
	}
	
}
