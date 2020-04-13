package com.stepdefinitions;

import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.core.Logger;
import com.base.Web_Browser;
import com.pages.Update_PetStore;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
import cucumber.api.java.en.When;

public class Updating_PetStore extends Web_Browser{

	private static Logger logger = (Logger)LogManager.getLogger(Updating_PetStore.class);
	Update_PetStore update;

	@Given("^I launch the browser$")
	public void i_launch_the_browser() throws IOException {
		launchBrowser();
		update = new Update_PetStore(driver);
	    update.URL();
	    logger.info("Launches the browser");
	}

	@When("^I Search the pet without logging_in$")
	public void i_Search_the_pet_without_logging_in() {
		update = new Update_PetStore(driver);
		update.Search();
		logger.debug("Searched the pet");
	}

	@When("^I click on a certain pet which lands on Shopping Cart$")
	public void i_click_on_a_certain_pet_which_lands_on_Shopping_Cart() {
		update = new Update_PetStore(driver);
		update.Cart();
		logger.info("Redirected to Shopping cart page");
	}

	@Then("^I click on update and click on return to menu and then quit the browser$")
	public void i_click_on_update_and_click_on_return_to_menu_and_then_quit_the_browser() throws IOException {
		update = new Update_PetStore(driver);
		update.Update();
		logger.fatal("Cart is Updated");
	}

}
