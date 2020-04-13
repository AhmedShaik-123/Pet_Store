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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user open the Pet Store Home page through the link",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user enters invalid credentials",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user will click on login button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "it gives error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});