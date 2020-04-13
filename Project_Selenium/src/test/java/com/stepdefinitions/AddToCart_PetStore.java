package com.stepdefinitions;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.core.Logger;
import com.base.Web_Browser;
import com.datadriven.DataDriven;
import com.pages.Cart_PetStore;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddToCart_PetStore extends Web_Browser{

	private static Logger logger = (Logger)LogManager.getLogger(AddToCart_PetStore.class);
	Cart_PetStore cart;
	
	DataDriven obj = new DataDriven();
	
	@Given("^user launches the browser$")
	public void user_launches_the_browser() throws IOException {
		launchBrowser();
		cart = new Cart_PetStore(driver);
	    cart.URL();
	    logger.info("Launches the browser");
	}

	@When("^user loggedin using valid credentials$")
	public void user_loggedin_using_valid_credentials() throws FileNotFoundException, IOException {
		cart = new Cart_PetStore(driver);
	    cart.Login_Page();
	    logger.debug("Login takes place");
	}

	@When("^user search different types of pets and clicks on the specific pet$")
	public void user_search_different_types_of_pets_and_clicks_on_the_specific_pet() {
	   cart = new Cart_PetStore(driver);
	   cart.SearchForFish();
	   logger.info("Clicked on a specific pet");
	}

	@Then("^user lands on the Shopping cart page$")
	public void user_lands_on_the_Shopping_cart_page() throws IOException, InterruptedException {
	   cart = new Cart_PetStore(driver);
	   cart.CartPage();
	   obj.OneOne();
	   logger.fatal("Added to the cart");
	}
	
}
