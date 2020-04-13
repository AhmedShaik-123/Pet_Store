package com.seleniumutility;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class SeleniumUtil {

protected WebDriver driver;
	
	public SeleniumUtil(WebDriver driver)
	{
		//Pointing to the Current Driver
		this.driver = driver;
		
	}
	
	public void Screenshot(String path)
	{
		//Taking the ScreenShot
		
		File source = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		
		try {
			//Copying the ScreenShot to the Specified Path
			FileUtils.copyFile(source , new File(path));
		} catch (IOException e) {
			System.out.println("Cannot take screenshot");
		}		
		
	}
	
}
