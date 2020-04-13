package com.testrunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature_File/Test_Cases.feature",
		tags = {"@PetStore"},
		glue = {"com.stepdefinitions"},
		plugin = {	"pretty",
					"html:reports/PS_htmlReport.html",
					"json:reports/jsonreport/PS_jsonReport",
					"junit:reports/junit/PS_junitReport.xml",
					"com.cucumber.listener.ExtentCucumberFormatter:target/Extentreports/Extentreport.html"
		 		 },
		monochrome = true,
		strict = true
		)
public class Runner {
	
	}
