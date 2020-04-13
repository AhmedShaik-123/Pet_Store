package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.seleniumutility.SeleniumUtil;

public class Login_PetStore {
	
	WebDriver driver;
	public Login_PetStore(WebDriver driver) {
		//Pointing to the Current Driver
		this.driver=driver;
	}
	public void URL() throws IOException {
		 //Maximize the browser driver.manage().window().maximize(); 
		 driver.manage().window().maximize();
		 //Implicitly wait for 5 seconds 
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	public void Login_Page() {
		//Prints the title of the website in the console
		System.out.println(driver.getTitle());
		//Click on the sign in button to get User Name and password edit boxes
		driver.findElement(By.xpath("//*[@id=\'MenuContent\']/a[2]")).click();		
	}
	public void LoginDetails(String un, String pswd) {
		//Giving valid User Name
		driver.findElement(By.name("username")).sendKeys(un);
		//Clearing the default characters in the password edit box
		driver.findElement(By.name("password")).clear();
		//Giving Valid password
		driver.findElement(By.name("password")).sendKeys(pswd);
	}
	public void submit() {
		//Click on Login button to Sign in into the Pet store website
		driver.findElement(By.name("signon")).click();
		//Click on Login button to Sign in into the Pet store website
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	public void quit() throws IOException {
		SeleniumUtil selutil = new SeleniumUtil(driver);
		selutil.Screenshot("src/main/resources/Screenshot/Login.png");
		//Closes the driver
		driver.quit();
		//Prints the message in the console
		System.out.println("The user landed on the HomePage");
	}
}
