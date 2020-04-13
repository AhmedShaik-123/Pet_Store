@PetStore
Feature: Pet Store Website

@TC_01_PetStore
Scenario: Register to the Pet Store website 
Given the user launch the browser
When the user open the Pet Store Home page using the link
And the user enters the details to register
Then the user clicks on register button
Then the user lands on the Home page to signin

@TC_02_PetStore
Scenario Outline: Login to the Pet Store website with valid credentials
Given the user launches the browser
When the user open PetStore HomePage using the link
And the user enters valid "<Username>" and "<Password>"
Then the user clicks on login button
Then the user lands on the Welcome page

Examples:
|		Username		|		Password		|
|		test				|		test				|
|		test1				|		test1				|
|		test2				|		test2				|
|		test3				|		test3				|
|		test4				|		test4				|


@TC_03_PetStore
Scenario: Login to the Pet Store website with invalid credentials
Given the user will launch the browser
When the user open the Pet Store Home page through the link
And the user enters invalid credentials 
Then the user will click on login button
Then it gives error message that the credentials are invalid

@TC_04_PetStore
Scenario: Login and search for different pets 
Given the user will launches the browser
When the user loggedin using valid credentials
And the user search different types of pets
Then the user lands on the searched pets  

@TC_05_PetStore
Scenario: Login and select a pet and add it to the cart and then logout
Given user launches the browser
When user loggedin using valid credentials
And user search different types of pets and clicks on the specific pet
Then user lands on the Shopping cart page

@TC_06_PetStore
Scenario: Search for a pet and update and then logout
Given I launch the browser
When I Search the pet without logging_in
And I click on a certain pet which lands on Shopping Cart
Then I click on update and click on return to menu and then quit the browser

@TC_07_PetStore
Scenario: Automate help section
Given I will launch the browser
When I will launch the website
And I will click on the help section
Then I will click on a specific issue and then quit


