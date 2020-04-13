package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.seleniumutility.SeleniumUtil;

public class InvalidCredentials_PetStore {
	
	WebDriver driver;
	public InvalidCredentials_PetStore(WebDriver driver) {
		//Pointing to the Current Driver
		this.driver=driver;
	}
	public void URL() throws IOException {
		//Maximize the browser 
		  driver.manage().window().maximize(); 
		  //Implicitly wait for 5 seconds 
		  driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	public void Login_Page() {
		//Open the Petstore website
		driver.get("https://petstore.octoperf.com/actions/Catalog.action");
		//Prints the title of the website in the console
		System.out.println(driver.getTitle());
		//Click on the sign in button to get User Name and password edit boxes
		driver.findElement(By.xpath("//*[@id=\'MenuContent\']/a[2]")).click();
	}
	public void LoginDetails() {
		//Giving invalid User Name
		driver.findElement(By.name("username")).sendKeys("USERNAME001");
		//Clearing the default characters in the password edit box
		driver.findElement(By.name("password")).clear();
		//Giving invalid Password
		driver.findElement(By.name("password")).sendKeys("PASSWORD001");
	}
	public void submit() {
		//Implicitly wait for 5 seconds
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//Click on Login button to Sign in into the Pet store website
		driver.findElement(By.name("signon")).click();
	}
	public void ErrorMessage() throws IOException {
		SeleniumUtil selutil = new SeleniumUtil(driver);
		selutil.Screenshot("src/main/resources/Screenshot/InvalidCredentials.png");
		//Closes the driver
		driver.quit();
		//Prints the message in the console
		System.out.println("It gave the proper error message");
	}
}
