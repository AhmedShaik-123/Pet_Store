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
  "duration": 25975166076,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_open_the_Pet_Store_Home_page_using_the_link()"
});
formatter.result({
  "duration": 2913189033,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_enters_the_details_to_register()"
});
formatter.result({
  "duration": 2296371541,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_clicks_on_register_button()"
});
formatter.result({
  "duration": 1666414703,
  "status": "passed"
});
formatter.match({
  "location": "Register_PetStore.the_user_lands_on_the_Home_page_to_signin()"
});
formatter.result({
  "duration": 8354051111,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user enters valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 21,
      "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;1"
    },
    {
      "cells": [
        "test",
        "test"
      ],
      "line": 22,
      "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;2"
    },
    {
      "cells": [
        "test1",
        "test1"
      ],
      "line": 23,
      "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;3"
    },
    {
      "cells": [
        "test2",
        "test2"
      ],
      "line": 24,
      "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;4"
    },
    {
      "cells": [
        "test3",
        "test3"
      ],
      "line": 25,
      "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;5"
    },
    {
      "cells": [
        "test4",
        "test4"
      ],
      "line": 26,
      "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PetStore"
    },
    {
      "line": 12,
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user enters valid \"test\" and \"test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 10657860816,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "duration": 873989554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    },
    {
      "val": "test",
      "offset": 34
    }
  ],
  "location": "Logging_PetStore.the_user_enters_valid_and(String,String)"
});
formatter.result({
  "duration": 780111125,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 504500028,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "duration": 2291509567,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PetStore"
    },
    {
      "line": 12,
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user enters valid \"test1\" and \"test1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 10381923091,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "duration": 708883472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 23
    },
    {
      "val": "test1",
      "offset": 35
    }
  ],
  "location": "Logging_PetStore.the_user_enters_valid_and(String,String)"
});
formatter.result({
  "duration": 294659918,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 493869855,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "duration": 3314669301,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PetStore"
    },
    {
      "line": 12,
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user enters valid \"test2\" and \"test2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 8484645809,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "duration": 1062667125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test2",
      "offset": 23
    },
    {
      "val": "test2",
      "offset": 35
    }
  ],
  "location": "Logging_PetStore.the_user_enters_valid_and(String,String)"
});
formatter.result({
  "duration": 314316108,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 569896693,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "duration": 2246178433,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PetStore"
    },
    {
      "line": 12,
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user enters valid \"test3\" and \"test3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 9276716558,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "duration": 751071500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test3",
      "offset": 23
    },
    {
      "val": "test3",
      "offset": 35
    }
  ],
  "location": "Logging_PetStore.the_user_enters_valid_and(String,String)"
});
formatter.result({
  "duration": 288190166,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1099121970,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "duration": 1661000300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login to the Pet Store website with valid credentials",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-valid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PetStore"
    },
    {
      "line": 12,
      "name": "@TC_02_PetStore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user open PetStore HomePage using the link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user enters valid \"test4\" and \"test4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user lands on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Logging_PetStore.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 9720369759,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_open_PetStore_HomePage_using_the_link()"
});
formatter.result({
  "duration": 597901496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test4",
      "offset": 23
    },
    {
      "val": "test4",
      "offset": 35
    }
  ],
  "location": "Logging_PetStore.the_user_enters_valid_and(String,String)"
});
formatter.result({
  "duration": 302727789,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 478191150,
  "status": "passed"
});
formatter.match({
  "location": "Logging_PetStore.the_user_lands_on_the_Welcome_page()"
});
formatter.result({
  "duration": 3652283402,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login to the Pet Store website with invalid credentials",
  "description": "",
  "id": "pet-store-website;login-to-the-pet-store-website-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_PetStore"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "the user will launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user open the Pet Store Home page through the link",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the user enters invalid credentials",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user will click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "it gives error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Invalid_PetStore.the_user_will_launch_the_browser()"
});
formatter.result({
  "duration": 8725504023,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_PetStore.the_user_open_the_Pet_Store_Home_page_through_the_link()"
});
formatter.result({
  "duration": 860286913,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_PetStore.the_user_enters_invalid_credentials()"
});
formatter.result({
  "duration": 356774011,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_PetStore.the_user_will_click_on_login_button()"
});
formatter.result({
  "duration": 402269968,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_PetStore.it_gives_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 1471223911,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Login and search for different pets",
  "description": "",
  "id": "pet-store-website;login-and-search-for-different-pets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@TC_04_PetStore"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "the user will launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "the user loggedin using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the user search different types of pets",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user lands on the searched pets",
  "keyword": "Then "
});
formatter.match({
  "location": "Searching_PetStore.the_user_will_launches_the_browser()"
});
formatter.result({
  "duration": 8347213677,
  "status": "passed"
});
formatter.match({
  "location": "Searching_PetStore.the_user_loggedin_using_valid_credentials()"
});
formatter.result({
  "duration": 2422435117,
  "status": "passed"
});
formatter.match({
  "location": "Searching_PetStore.the_user_search_different_types_of_pets()"
});
formatter.result({
  "duration": 3196701972,
  "status": "passed"
});
formatter.match({
  "location": "Searching_PetStore.the_user_lands_on_the_searched_pets()"
});
formatter.result({
  "duration": 2100154982,
  "status": "passed"
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
  "duration": 8589798608,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_PetStore.user_loggedin_using_valid_credentials()"
});
formatter.result({
  "duration": 2147833484,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_PetStore.user_search_different_types_of_pets_and_clicks_on_the_specific_pet()"
});
formatter.result({
  "duration": 4010246189,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_PetStore.user_lands_on_the_Shopping_cart_page()"
});
formatter.result({
  "duration": 2112018610,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Search for a pet and update and then logout",
  "description": "",
  "id": "pet-store-website;search-for-a-pet-and-update-and-then-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@TC_06_PetStore"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I Search the pet without logging_in",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on a certain pet which lands on Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on update and click on return to menu and then quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Updating_PetStore.i_launch_the_browser()"
});
formatter.result({
  "duration": 7704583587,
  "status": "passed"
});
formatter.match({
  "location": "Updating_PetStore.i_Search_the_pet_without_logging_in()"
});
formatter.result({
  "duration": 2486783676,
  "status": "passed"
});
formatter.match({
  "location": "Updating_PetStore.i_click_on_a_certain_pet_which_lands_on_Shopping_Cart()"
});
formatter.result({
  "duration": 871190583,
  "status": "passed"
});
formatter.match({
  "location": "Updating_PetStore.i_click_on_update_and_click_on_return_to_menu_and_then_quit_the_browser()"
});
formatter.result({
  "duration": 1661198329,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Automate help section",
  "description": "",
  "id": "pet-store-website;automate-help-section",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@TC_07_PetStore"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I will launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "I will launch the website",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I will click on the help section",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I will click on a specific issue and then quit",
  "keyword": "Then "
});
formatter.match({
  "location": "HelpSection_PetStore.i_will_launch_the_browser()"
});
formatter.result({
  "duration": 7765082657,
  "status": "passed"
});
formatter.match({
  "location": "HelpSection_PetStore.i_will_launch_the_website()"
});
formatter.result({
  "duration": 397478027,
  "status": "passed"
});
formatter.match({
  "location": "HelpSection_PetStore.i_will_click_on_the_help_section()"
});
formatter.result({
  "duration": 540387352,
  "status": "passed"
});
formatter.match({
  "location": "HelpSection_PetStore.i_will_click_on_a_specific_issue_and_then_quit()"
});
formatter.result({
  "duration": 1728888628,
  "status": "passed"
});
});