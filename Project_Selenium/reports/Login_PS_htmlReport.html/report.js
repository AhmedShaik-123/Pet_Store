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
formatter.scenarioOutline({
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "test",
        "test"
      ]
    },
    {
      "cells": [
        "test1",
        "test1"
      ]
    },
    {
      "cells": [
        "test2",
        "test2"
      ]
    },
    {
      "cells": [
        "test3",
        "test3"
      ]
    },
    {
      "cells": [
        "test4",
        "test4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid \"test\" and \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid \"test1\" and \"test1\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid \"test2\" and \"test2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid \"test3\" and \"test3\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid \"test4\" and \"test4\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "status": "passed"
});
});