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
  "name": "Login and search for different pets",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_04_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user will launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Searching_PetStore.the_user_will_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user loggedin using valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Searching_PetStore.the_user_loggedin_using_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user search different types of pets",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Searching_PetStore.the_user_search_different_types_of_pets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user lands on the searched pets",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Searching_PetStore.the_user_lands_on_the_searched_pets()"
});
formatter.result({
  "status": "passed"
});
});