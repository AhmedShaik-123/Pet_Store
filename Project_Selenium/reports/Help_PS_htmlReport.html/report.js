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
  "name": "Automate help section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_07_PetStore"
    }
  ]
});
formatter.step({
  "name": "I will launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.HelpSection_PetStore.i_will_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will launch the website",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.HelpSection_PetStore.i_will_launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will click on the help section",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.HelpSection_PetStore.i_will_click_on_the_help_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will click on a specific issue and then quit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.HelpSection_PetStore.i_will_click_on_a_specific_issue_and_then_quit()"
});
formatter.result({
  "status": "passed"
});
});