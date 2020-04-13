$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Feature_File/Test_Cases.feature");
formatter.feature({
  "name": "Pet Store Website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PetStore"
    }
  ]
});
formatter.scenario({
  "name": "Search for a pet and update and then logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_06_PetStore"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Updating_PetStore.i_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Search the pet without logging_in",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Updating_PetStore.i_Search_the_pet_without_logging_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a certain pet which lands on Shopping Cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Updating_PetStore.i_click_on_a_certain_pet_which_lands_on_Shopping_Cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on update and click on return to menu and then quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Updating_PetStore.i_click_on_update_and_click_on_return_to_menu_and_then_quit_the_browser()"
});
formatter.result({
  "status": "passed"
});
});