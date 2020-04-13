package com.stepdefinitions;

import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.core.Logger;
import com.base.Web_Browser;
import com.pages.Help_PetStore;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HelpSection_PetStore extends Web_Browser{
	
	private static Logger logger = (Logger)LogManager.getLogger(HelpSection_PetStore.class);
	Help_PetStore help;

	@Given("^I will launch the browser$")
	public void i_will_launch_the_browser() throws IOException {
		launchBrowser();
		help = new Help_PetStore(driver);
	    help.URL();
	    logger.info("Launches the browser");
	}

	@When("^I will launch the website$")
	public void i_will_launch_the_website() {
		help = new Help_PetStore(driver);
	    help.Website();
	    logger.debug("Redirected to the Ptsore website");
	}

	@When("^I will click on the help section$")
	public void i_will_click_on_the_help_section() {
		help = new Help_PetStore(driver);
	    help.Help();
	    logger.info("Clicked on the help section");
	}

	@Then("^I will click on a specific issue and then quit$")
	public void i_will_click_on_a_specific_issue_and_then_quit() throws IOException {
		help = new Help_PetStore(driver);
	    help.Issue();
	    logger.warn("Clicked on a Issue and closed the browser");
	}

}
