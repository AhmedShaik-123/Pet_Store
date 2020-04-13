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
  "name": "Login to the Pet Store website with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_03_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user will launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Invalid_PetStore.the_user_will_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Pet Store Home page through the link",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Invalid_PetStore.the_user_open_the_Pet_Store_Home_page_through_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Invalid_PetStore.the_user_enters_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Invalid_PetStore.the_user_will_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it gives error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Invalid_PetStore.it_gives_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "status": "passed"
});
});