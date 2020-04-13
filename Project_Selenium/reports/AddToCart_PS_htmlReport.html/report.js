$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature_File/Test_Cases.feature");
formatter.feature({
  "line": 2,
  "name": "Pet Store Website",
  "description": "",
  "id": "pet-store-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PetStore"
    }
  ]
});
formatter.scenario({
  "line": 45,
  "name": "Login and select a pet and add it to the cart and then logout",
  "description": "",
  "id": "pet-store-website;login-and-select-a-pet-and-add-it-to-the-cart-and-then-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@TC_05_PetStore"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user loggedin using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user search different types of pets and clicks on the specific pet",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user lands on the Shopping cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart_PetStore.user_launches_the_browser()"
});
formatter.result({
  "duration": 9538539283,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_PetStore.user_loggedin_using_valid_credentials()"
});
formatter.result({
  "duration": 2178371006,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_PetStore.user_search_different_types_of_pets_and_clicks_on_the_specific_pet()"
});
formatter.result({
  "duration": 3289015488,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_PetStore.user_lands_on_the_Shopping_cart_page()"
});
formatter.result({
  "duration": 70970665142,
  "status": "passed"
});
});