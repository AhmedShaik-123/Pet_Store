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
  "line": 5,
  "name": "Register to the Pet Store website",
  "description": "",
  "id": "pet-store-website;register-to-the-pet-store-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_PetStore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the Pet Store Home page using the link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enters the details to register",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user clicks on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user lands on the Home page to signin",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_PetStore.the_user_launch_the_browser()"
});
formatter.result({
  "duration": 18572006184,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_open_the_Pet_Store_Home_page_using_the_link()"
});
formatter.result({
  "duration": 4889304804,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_enters_the_details_to_register()"
});
formatter.result({
  "duration": 2072265494,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_clicks_on_register_button()"
});
formatter.result({
  "duration": 3837352980,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_lands_on_the_Home_page_to_signin()"
});
formatter.result({
  "duration": 4728224507,
  "status": "passed"
});
});