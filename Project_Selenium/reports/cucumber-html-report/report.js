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
  "name": "Register to the Pet Store website",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_01_PetStore"
    }
  ]
});
formatter.step({
  "name": "the user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Register_PetStore.the_user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Pet Store Home page using the link",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Register_PetStore.the_user_open_the_Pet_Store_Home_page_using_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the details to register",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Register_PetStore.the_user_enters_the_details_to_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on register button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Register_PetStore.the_user_clicks_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user lands on the Home page to signin",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Register_PetStore.the_user_lands_on_the_Home_page_to_signin()"
});
formatter.result({
  "status": "passed"
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
formatter.scenario({
  "name": "Login and select a pet and add it to the cart and then logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PetStore"
    },
    {
      "name": "@TC_05_PetStore"
    }
  ]
});
formatter.step({
  "name": "user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.AddToCart_PetStore.user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user loggedin using valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.AddToCart_PetStore.user_loggedin_using_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search different types of pets and clicks on the specific pet",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.AddToCart_PetStore.user_search_different_types_of_pets_and_clicks_on_the_specific_pet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user lands on the Shopping cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.AddToCart_PetStore.user_lands_on_the_Shopping_cart_page()"
});
formatter.result({
  "status": "passed"
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