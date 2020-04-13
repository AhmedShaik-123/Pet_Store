package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.seleniumutility.SeleniumUtil;

public class Update_PetStore {
	
	WebDriver driver;
	public Update_PetStore(WebDriver driver) {
		//Pointing to the Current Driver
		this.driver=driver;
	}
	public void URL() throws IOException {
		 //Maximize the window  
		 driver.manage().window().maximize(); 
		 //Implicitly wait for 5 seconds 
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);	
	}
	public void Search() {
		//Open the Petstore website
		driver.get("https://petstore.octoperf.com/actions/Catalog.action");
		//Prints the title of the Petstore
		System.out.println(driver.getTitle());
		//Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);	
		//Search the pet in the search box
		driver.findElement(By.name("keyword")).sendKeys("dog");
		//Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);	
		//Click on the search button
		driver.findElement(By.name("searchProducts")).click();
	}
	public void Cart() {
		//Implicitly wait for 5 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);	
		//Click on a specific pet update
		driver.findElement(By.xpath("//*[@id=\"Catalog\"]/table/tbody/tr[2]/td[1]/a")).click();
		//Implicitly wait for 3 seconds
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		////Click on a specific pet
		driver.findElement(By.xpath("//*[@id=\"Catalog\"]/table/tbody/tr[2]/td[5]/a")).click();		
	}
	public void Update() throws IOException {
		SeleniumUtil selutil = new SeleniumUtil(driver);
		selutil.Screenshot("src/main/resources/Screenshot/Update.png");
		//Closes the driver
		driver.quit();
	}
}
