package com.stepdefinitions;

import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.core.Logger;
import com.base.Web_Browser;
import com.pages.Search_PetStore;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
import cucumber.api.java.en.When;

public class Searching_PetStore extends Web_Browser{
	
	private static Logger logger = (Logger)LogManager.getLogger(Searching_PetStore.class);
	Search_PetStore search;
	
	@Given("^the user will launches the browser$")
	public void the_user_will_launches_the_browser() throws IOException {
		launchBrowser();
		search= new Search_PetStore(driver);
	    search.URL();
	    logger.debug("Launches the browser");
	}

	@When("^the user loggedin using valid credentials$")
	public void the_user_loggedin_using_valid_credentials() {
		search= new Search_PetStore(driver);
	    search.Login_Page();
	    logger.info("Login takes place");
	}

	@When("^the user search different types of pets$")
	public void the_user_search_different_types_of_pets() {
		search= new Search_PetStore(driver);
		search.SearchForFish();
		logger.info("Searching takes place");
	}

	@Then("^the user lands on the searched pets$")
	public void the_user_lands_on_the_searched_pets() throws IOException {
		search= new Search_PetStore(driver);
		search.SearchedPet();
		logger.debug("Get the pets which are searched");
	}

}
