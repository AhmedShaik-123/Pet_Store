package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.seleniumutility.SeleniumUtil;

public class Help_PetStore {
	
	WebDriver driver;
	public Help_PetStore(WebDriver driver) {
		//Pointing to the Current Driver
		this.driver= driver;
	}
	public void URL() throws IOException {
		 //Maximizing the window 
		 driver.manage().window().maximize(); 
		 //Implicitly wait for 5 seconds 
		 driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);		 	
	}
	public void Website() {
		//Open the Petstore website
		driver.get("https://petstore.octoperf.com/actions/Catalog.action");
		//Prints the title of the website in the console
		System.out.println(driver.getTitle());
		//Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);	
	}
	public void Help() {
		//Click on Help button (?) on the home page of Petstore website
		driver.findElement(By.xpath("//*[@id=\"MenuContent\"]/a[3]")).click();
		//Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);	
	}
	public void Issue() throws IOException {
		SeleniumUtil selutil = new SeleniumUtil(driver);
		selutil.Screenshot("src/main/resources/Screenshot/Help.png");
		//Closes the driver
		driver.quit();
	}
}
