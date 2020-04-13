package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.seleniumutility.SeleniumUtil;

public class Registration_PetStore {
	
	WebDriver driver;
	public Registration_PetStore(WebDriver driver) {
		//Pointing to the Current Driver
		this.driver=driver;
	}
	public void URL() throws IOException {
		//Maximize the window 
		driver.manage().window().maximize(); 
		//Implicitly wait for 5 seconds 
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);		
	}
	public void Registration_Page() {
		//Prints the Title of the website in the console
		System.out.println(driver.getTitle());
		//Click to find register button
		driver.findElement(By.xpath("//*[@id=\'MenuContent\']/a[2]")).click();	
		//click to get the information to be filled
		driver.findElement(By.xpath("//*[@id=\'Catalog\']/a")).click();	
	}
	public void Registration_Details(){
		//Enter the User name
		driver.findElement(By.name("username")).sendKeys("USERNAME001");	
		//Enter the Password
		driver.findElement(By.name("password")).sendKeys("PASSOWRD001");	
		//Enter the password again
		driver.findElement(By.name("repeatedPassword")).sendKeys("PASSWORD001");	
		//Enter your First Name
		driver.findElement(By.name("account.firstName")).sendKeys("FIRSTNAME");	
		//Enter your Last Name
		driver.findElement(By.name("account.lastName")).sendKeys("LASTNAME");	
		//Enter your Email ID
		driver.findElement(By.name("account.email")).sendKeys("abcd@gmail.com");	
		//Enter your Mobile number
		driver.findElement(By.name("account.phone")).sendKeys("9876543210");	
		//Enter your Address
		driver.findElement(By.name("account.address1")).sendKeys("ADDRESS1");	
		//Enter your Address
		driver.findElement(By.name("account.address2")).sendKeys("ADDRESS2");	
		//Enter your city
		driver.findElement(By.name("account.city")).sendKeys("CITY");	
		//Enter your State
		driver.findElement(By.name("account.state")).sendKeys("STATE");	
		//Enter your city ZIP code
		driver.findElement(By.name("account.zip")).sendKeys("500000");	
		//Enter your Country
		driver.findElement(By.name("account.country")).sendKeys("COUNTRY");	
		//Select the langage as English
		driver.findElement(By.xpath("//*[@id=\'Catalog\']/form/table[3]/tbody/tr[1]/td[2]/select/option[1]")).click();
		//Select the fav category as Fish
		driver.findElement(By.xpath("//*[@id=\"Catalog\"]/form/table[3]/tbody/tr[2]/td[2]/select/option[1]")).click();	
	}
	public void submit() {
		//Click on Save Account information to get registered
		driver.findElement(By.name("newAccount")).click();
		//Implicitly wait for 5 seconds
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);	//wait for 5 seconds
	}
	public void quit() throws IOException {
		
		SeleniumUtil selutil = new SeleniumUtil(driver);
		selutil.Screenshot("src/main/resources/Screenshot/Register.png");
		//Closes the driver
		driver.quit();	
		//Prints the message in the console
		System.out.println("User lands on the  signin page");
	}
}
