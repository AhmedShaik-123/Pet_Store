package com.datadriven;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
//import org.apache.poi.xssf.usermodel.XSSFWorkbook;
//import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DataDriven {
	
	WebDriver driver;
	
	public void OneOne() throws FileNotFoundException, IOException, InterruptedException {
		
		FileInputStream fInput;
		fInput = new FileInputStream("src/test/resources/ExcelDataDriven/UNandPW.xlsx");
		
		XSSFWorkbook wb = new XSSFWorkbook(fInput);
		XSSFSheet sheet = wb.getSheet("MySheet");
		
		int rows = sheet.getLastRowNum();
		
		for(int i=1; i<=rows; i++) {
			
			String un = sheet.getRow(i).getCell(0).toString();
			String pswd = sheet.getRow(i).getCell(1).toString();
			
			System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");
			
			driver = new ChromeDriver();
			
			driver.manage().window().maximize();
			
			driver.get("https://petstore.octoperf.com/actions/Catalog.action");
			System.out.println(driver.getTitle());
			driver.findElement(By.xpath("//*[@id=\"MenuContent\"]/a[2]")).click();
			driver.findElement(By.name("username")).sendKeys(un);
			driver.findElement(By.name("password")).clear();
			driver.findElement(By.name("password")).sendKeys(pswd);
			driver.findElement(By.name("signon")).click();
			Thread.sleep(2000);
			System.out.println("This is Iteration number " + i + ".");
			driver.quit();
		}
	}

}
