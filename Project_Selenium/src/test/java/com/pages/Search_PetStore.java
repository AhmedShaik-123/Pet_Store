package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.seleniumutility.SeleniumUtil;

public class Search_PetStore {
	
	WebDriver driver;
	public Search_PetStore(WebDriver driver) {
		//Pointing to the Current Driver
		this.driver=driver;
	}
	public void URL() throws IOException {
		 //Maximize the window
		 driver.manage().window().maximize(); 
		 //Implicitly wait for 5 seconds
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);		 
		}
		public void Login_Page() {
			//Open the Petstore website
			driver.get("https://petstore.octoperf.com/actions/Catalog.action");
			//Prints the title of the Petstore
			System.out.println(driver.getTitle());
			//Click on the sign in button to get User Name and password edit boxes
			driver.findElement(By.xpath("//*[@id=\'MenuContent\']/a[2]")).click();
			//Giving valid User Name
			driver.findElement(By.name("username")).sendKeys("ahmed");
			//Clearing the default characters in the password edit box
			driver.findElement(By.name("password")).clear();
			//Giving valid Password
			driver.findElement(By.name("password")).sendKeys("9753102468");
			//Click on Login button to Sign in into the Pet store website
			driver.findElement(By.name("signon")).click();
		}
		public void SearchForFish() {
			//Type in the search box
			driver.findElement(By.name("keyword")).sendKeys("Angelfish");
			//Click on search button 
			driver.findElement(By.name("searchProducts")).click();
		}
		public void SearchedPet() throws IOException {
			SeleniumUtil selutil = new SeleniumUtil(driver);
			selutil.Screenshot("src/main/resources/Screenshot/Search.png");
			//Closes the driver
			driver.quit();
			//Prints the message in the console
			System.out.println("The user landed on the searched pet page");
		}
}
