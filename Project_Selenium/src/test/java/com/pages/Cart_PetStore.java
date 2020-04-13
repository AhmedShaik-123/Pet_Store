package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.seleniumutility.SeleniumUtil;

public class Cart_PetStore {

	WebDriver driver;
	public Cart_PetStore(WebDriver driver) {
		//Pointing to the Current Driver
		this.driver = driver;
	}
	public void URL() throws IOException { // URL to launch the Chrome browser
		 //Maximize the browser 
		 driver.manage().window().maximize(); 
		 //Implicitly wait for 5 seconds 
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	public void Login_Page() { // Opening the Login page of the website
		// url of the pet store website
		driver.get("https://petstore.octoperf.com/actions/Catalog.action");
		// Getting the title of the website in the console
		System.out.println(driver.getTitle());
		// Click on the sign in button to get User Name and password edit boxes
		driver.findElement(By.xpath("//*[@id=\'MenuContent\']/a[2]")).click();
		// Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		// Giving valid User Name
		driver.findElement(By.name("username")).sendKeys("ahmed");
		// Clearing the default characters in the password edit box
		driver.findElement(By.name("password")).clear();
		// Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		// Giving Valid password
		driver.findElement(By.name("password")).sendKeys("9753102468");
		// Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		// Click on Login button to Sign in into the Pet store website
		driver.findElement(By.name("signon")).click();
	}
	public void SearchForFish() { // Search for a fish
		// Click on a pet
		driver.findElement(By.xpath("//*[@id=\"SidebarContent\"]/a[1]/img")).click();
		// click on a specific breed of pet that should be added to the cart
		driver.findElement(By.xpath("//*[@id=\"Catalog\"]/table/tbody/tr[2]/td[1]/a")).click();
		// Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		// Click on Add to cart button
		driver.findElement(By.xpath("//*[@id=\"Catalog\"]/table/tbody/tr[2]/td[5]/a")).click();
	}
	public void CartPage() throws IOException { // Add the fish to the cart		
		SeleniumUtil selutil = new SeleniumUtil(driver);
		selutil.Screenshot("src/main/resources/Screenshot/AddToCart.png");
		// Closes the driver
		driver.quit();
		//Prints the message in the console
		System.out.println("The user landed on the Shopping cart page");
	}

}
